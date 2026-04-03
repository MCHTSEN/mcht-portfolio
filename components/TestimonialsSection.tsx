import { motion } from 'framer-motion';
import Matter from 'matter-js';
import React, { useEffect, useRef } from 'react';

// WebGL animated background with stars and noise
const WebGLBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const vertexShaderSource = `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = position * 0.5 + 0.5;
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;
            varying vec2 vUv;
            uniform float time;
            uniform vec2 resolution;

            float random(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }
            
            vec3 rand3(vec2 p) {
                return fract(sin(vec3(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)),dot(p,vec2(419.2,371.9))))*43758.5453);
            }

            void main() {
                vec2 st = gl_FragCoord.xy / resolution.xy;
                st.x *= resolution.x / resolution.y;
                
                // Animated dynamic noise
                float noiseVal = random(st * 100.0 + time * 0.1) * 0.04;
                
                // Stars
                vec3 stars = vec3(0.0);
                for(float i=0.0; i<40.0; i++) {
                    vec3 p = rand3(vec2(i, i*0.1));
                    vec2 pos = vec2(p.x * (resolution.x/resolution.y), p.y);
                    pos.y += time * 0.02 * (p.z + 0.5); // Move stars up
                    pos.y = fract(pos.y);
                    
                    float dist = length(st - pos);
                    float brightness = 0.001 / (dist * dist);
                    brightness *= sin(time * 2.0 + p.x * 10.0) * 0.5 + 0.5; // twinkle
                    
                    stars += vec3(brightness) * p.z;
                }
                
                vec3 color = vec3(0.02, 0.02, 0.03) + stars + vec3(noiseVal);
                
                // Radial light in background subtle
                float distCenter = length(vUv - 0.5);
                color += vec3(0.05, 0.08, 0.1) * (1.0 - smoothstep(0.0, 0.8, distCenter));

                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const compileShader = (source: string, type: number) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const vs = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fs = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        const program = gl.createProgram();
        if (!vs || !fs || !program) return;

        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const timeLocation = gl.getUniformLocation(program, 'time');
        const resolutionLocation = gl.getUniformLocation(program, 'resolution');

        let animationFrameId: number;
        const startTime = Date.now();

        const render = () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, width, height);
            }

            gl.uniform1f(timeLocation, (Date.now() - startTime) * 0.001);
            gl.uniform2f(resolutionLocation, width, height);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            style={{ opacity: 0.8 }}
        />
    );
};

// Physics Text using matter-js
const PhysicsText: React.FC<{ text: string }> = ({ text }) => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const engine = Matter.Engine.create();
        const render = Matter.Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: 250,
                height: 120,
                wireframes: false,
                background: 'transparent'
            }
        });

        const ground = Matter.Bodies.rectangle(125, 120, 260, 20, { 
            isStatic: true,
            render: { fillStyle: 'transparent' }
        });
        
        const leftWall = Matter.Bodies.rectangle(0, 60, 20, 120, { 
            isStatic: true, 
            render: { fillStyle: 'transparent' }
        });
        
        const rightWall = Matter.Bodies.rectangle(250, 60, 20, 120, { 
            isStatic: true, 
             render: { fillStyle: 'transparent' }
        });

        Matter.World.add(engine.world, [ground, leftWall, rightWall]);

        const chars = text.split('');
        const bodies: Matter.Body[] = [];
        
        chars.forEach((char, i) => {
            const body = Matter.Bodies.circle(30 + i * 30, 10, 14, {
                restitution: 0.9,
                friction: 0.1,
                render: {
                    fillStyle: '#4f46e5', // studio-primary
                    strokeStyle: '#818cf8',
                    lineWidth: 3
                }
            });
            bodies.push(body);
        });

        Matter.World.add(engine.world, bodies);

        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        Matter.World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        Matter.Runner.run(Matter.Runner.create(), engine);
        Matter.Render.run(render);

        engineRef.current = engine;
        renderRef.current = render;

        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            if (render.canvas) {
                render.canvas.remove();
            }
        };
    }, [text]);

    return (
        <div className="relative w-full h-[120px] rounded-lg border border-white/5 bg-black/50 overflow-hidden shadow-inner flex flex-col pt-2 justify-center">
             <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-20">
                 <span className="text-xl font-mono uppercase tracking-widest text-white/50">Physics Demo</span>
             </div>
             <div ref={sceneRef} className="absolute inset-0 cursor-grab active:cursor-grabbing z-20" />
        </div>
    );
};

interface FeatureBoxProps {
    title: string;
    description: string;
    hasPhysics?: boolean;
    avatars?: string[];
    delay?: number;
}

const FeatureCard: React.FC<FeatureBoxProps> = ({ title, description, hasPhysics, avatars, delay = 0 }) => {
    // A highly detailed skeuomorphic CRT style card
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                filter: 'brightness(1.15)',
                y: -10,
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 20px rgba(79, 70, 229, 0.4), inset 0 2px 3px rgba(255,255,255,0.2), inset 0 -3px 5px rgba(0,0,0,0.5)'
            }}
            className="feature-card-skeuo relative shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[420px] sm:h-[450px] rounded-2xl transition-all duration-300"
            style={{
                background: 'linear-gradient(145deg, #1e1e24, #121215)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.7), inset 0 2px 3px rgba(255,255,255,0.1), inset 0 -3px 5px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '1px'
            }}
        >
            {/* Glossy Bevel Inner Layer */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative" style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 100%)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(0,0,0,0.6)'
            }}>
                
                {/* CRT Screen Section (Skeuomorphic bezel) */}
                <div className="absolute top-6 left-6 right-6 h-[200px] rounded-xl overflow-hidden shadow-inner border border-black/80" style={{
                    boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.8), 0 2px 0 rgba(255,255,255,0.08)'
                }}>
                     {/* The Screen Display */}
                     <div className="w-full h-full bg-[#0a0a0c] relative crt-screen p-4 flex flex-col justify-end">
                          {/* CRT Glow and Scanlines */}
                          <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#4f46e5]/5 to-transparent animate-pulse" />
                          
                          {hasPhysics ? (
                              <PhysicsText text="GÜVEN" />
                          ) : (
                              <div className="relative z-10 w-full h-full flex flex-col justify-between">
                                 <div className="flex items-center justify-between">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">REC</span>
                                 </div>
                                 
                                 {avatars && (
                                     <div className="flex -space-x-4 mb-4">
                                         {avatars.map((url, i) => (
                                             <img key={i} src={url} alt="avatar" className="w-20 h-20 rounded-full border-[3px] border-[#121215] object-cover shadow-2xl relative z-10 hover:z-20 hover:scale-110 transition-transform" />
                                         ))}
                                     </div>
                                 )}
                                 
                                 <div className="space-y-1">
                                    <div className="h-1 w-1/3 bg-[#4f46e5] rounded-full shadow-[0_0_10px_#4f46e5]" />
                                    <div className="h-1 w-2/3 bg-[#4f46e5]/40 rounded-full" />
                                 </div>
                              </div>
                          )}
                     </div>
                </div>

                {/* Details / Text area */}
                <div className="absolute bottom-6 left-6 right-6 top-[240px] pt-4">
                     <h3 className="text-xl font-bold tracking-tighter text-white/90 uppercase drop-shadow-md mb-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                        {title}
                     </h3>
                     <p className="text-sm font-medium text-white/50 leading-relaxed crt-text" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        {description}
                     </p>

                     {/* Skeuomorphic Details: Buttons / Lights */}
                     <div className="absolute bottom-0 w-full flex items-center justify-between">
                         <div className="flex gap-3">
                             {/* Mini glowing button */}
                             <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#2a2a30] to-[#15151a] shadow-[0_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform">
                                 <div className="w-3 h-3 rounded-full bg-[#4f46e5] shadow-[0_0_8px_rgba(79,70,229,0.8),inset_0_1px_2px_rgba(255,255,255,0.5)]" />
                             </div>
                             <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#2a2a30] to-[#15151a] shadow-[0_2px_4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer active:scale-95 transition-transform" />
                         </div>
                         
                         <div className="w-16 h-1 bg-black/40 rounded-full shadow-inner border border-white/5" />
                     </div>
                </div>

            </div>
        </motion.div>
    );
};

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="relative w-full py-32 bg-black flex flex-col items-center overflow-x-clip overflow-y-visible">
            {/* Global WebGL Background for this section */}
            <WebGLBackground />
            
            <style dangerouslySetInnerHTML={{__html: `
                .scanlines {
                    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
                    background-size: 100% 4px;
                }
                .crt-screen::before {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0; left: 0; bottom: 0; right: 0;
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                    z-index: 2;
                    background-size: 100% 2px, 3px 100%;
                    pointer-events: none;
                }
                .crt-text {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                .animate-marquee-slow {
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @media (max-width: 767px) {
                    .animate-marquee-slow {
                        animation: none;
                        width: max-content !important;
                    }
                }
            `}} />

            <div className="relative z-10 max-w-[1800px] w-full px-6 mb-16 text-center">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white drop-shadow-2xl" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.8), 0 0 20px rgba(79, 70, 229, 0.4)' }}>
                    Müşterilerimiz <span className="text-[#4f46e5]">Ne Diyor?</span>
                </h2>
                <p className="mt-4 text-white/50 font-mono tracking-widest uppercase text-sm crt-text">
                    Gerçek Sonuçlar • Gerçek Deneyimler • Kanıtlanmış Başarı
                </p>
            </div>

            {/* Infinitely Looping Marquee container */}
            <div className="relative z-30 w-full overflow-x-auto md:overflow-hidden py-12 scrollbar-hide touch-pan-x">
                <div className="flex w-max md:w-[200%] gap-6 sm:gap-8 px-4 animate-marquee-slow md:hover:[animation-play-state:paused]">
                    
                    {/* First logical set */}
                    <FeatureCard 
                        title="Fintech Startup CEO"
                        description="Uygulamamızı yayına almadan 2 hafta önce teslim ettiler. Temiz mimarileri sayesinde 100.000 kullanıcıyı sıfır çökmeyle aştık."
                        avatars={['https://i.pravatar.cc/150?img=11']}
                    />
                    <FeatureCard 
                        title="E-Ticaret Yöneticisi"
                        description="Sadece güzel değil, tasarımları sayesinde dönüşüm oranlarımız (Conversion Rate) %35 arttı. Kullanıcıyı anlayan bir ekipler."
                        avatars={['https://i.pravatar.cc/150?img=32', 'https://i.pravatar.cc/150?img=33']}
                    />
                    <FeatureCard 
                        title="Lukeri Studio"
                        description="Kodda sınırları zorluyoruz. İnovasyonu, şeffaflığı ve teknik mükemmeliyeti oyunlaştırarak test edin."
                        hasPhysics={true}
                    />
                    <FeatureCard 
                        title="IoT Şirketi Kurucusu"
                        description="Donanımlarımız arasındaki Bluetooth senkronizasyonu mükemmel. Diğer ajansların yapamadığını çok rahat çözdüler."
                    />
                    <FeatureCard 
                        title="Global Ajans"
                        description="Spagettileşmiş legacy kodumuzu devraldılar, temizlediler ve modern teknolojiye geçirdiler. Tam şeffaflıkla çalıştılar."
                        avatars={['https://i.pravatar.cc/150?img=68']}
                    />

                    {/* Duplicate sequence for infinite loop */}
                    <FeatureCard 
                        title="Fintech Startup CEO"
                        description="Uygulamamızı yayına almadan 2 hafta önce teslim ettiler. Temiz mimarileri sayesinde 100.000 kullanıcıyı sıfır çökmeyle aştık."
                        avatars={['https://i.pravatar.cc/150?img=11']}
                    />
                    <FeatureCard 
                        title="E-Ticaret Yöneticisi"
                        description="Sadece güzel değil, tasarımları sayesinde dönüşüm oranlarımız (Conversion Rate) %35 arttı. Kullanıcıyı anlayan bir ekipler."
                        avatars={['https://i.pravatar.cc/150?img=32', 'https://i.pravatar.cc/150?img=33']}
                    />
                    <FeatureCard 
                        title="Lukeri Studio"
                        description="Kodda sınırları zorluyoruz. İnovasyonu, şeffaflığı ve teknik mükemmeliyeti oyunlaştırarak test edin."
                        hasPhysics={true}
                    />
                    <FeatureCard 
                        title="IoT Şirketi Kurucusu"
                        description="Donanımlarımız arasındaki Bluetooth senkronizasyonu mükemmel. Diğer ajansların yapamadığını çok rahat çözdüler."
                    />
                    <FeatureCard 
                        title="Global Ajans"
                        description="Spagettileşmiş legacy kodumuzu devraldılar, temizlediler ve modern teknolojiye geçirdiler. Tam şeffaflıkla çalıştılar."
                        avatars={['https://i.pravatar.cc/150?img=68']}
                    />
                </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
        </section>
    );
};
