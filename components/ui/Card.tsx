import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};