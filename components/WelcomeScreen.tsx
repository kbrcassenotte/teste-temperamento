import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Compass, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="bg-teal-50 p-6 rounded-full">
            <Compass className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
          Descubra seu <span className="text-teal-600">Temperamento</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
          Uma análise comportamental profunda para impulsionar seu autoconhecimento e desenvolvimento pessoal. Entenda suas forças e como você reage ao mundo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={onStart} className="flex items-center gap-2 text-lg px-8">
            Iniciar Análise
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          Duração estimada: 5 minutos
        </div>
      </Card>
    </div>
  );
};