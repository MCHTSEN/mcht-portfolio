import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightItem {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
}

export interface CaseStudyProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  tags?: string[];
  buttonText?: string;
  isArticle?: boolean;
  className?: string;
  fullWidth?: boolean;
  centered?: boolean;
  children?: ReactNode;
}
