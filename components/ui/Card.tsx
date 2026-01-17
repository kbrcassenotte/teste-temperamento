import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};