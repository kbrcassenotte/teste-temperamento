import React, { useState } from 'react';
import { Question, Option } from '../types';
import { Card } from './ui/Card';
import { ChevronRight, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: Option[]) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxReachedIndex, setMaxReachedIndex] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [animating, setAnimating] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  
  const selectedOptionId = answers[currentIndex]?.id;
  const hasAnsweredCurrent = !!answers[currentIndex];

  // O botão só deve aparecer se o usuário "voltou" ou se está na última questão pronta para finalizar
  const showForwardButton = !animating && (
    currentIndex < maxReachedIndex || 
    (currentIndex === questions.length - 1 && hasAnsweredCurrent)
  );

  const handleOptionSelect = (option: Option) => {
    if (animating) return;
    
    setAnimating(true);
    
    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setMaxReachedIndex(prev => Math.max(prev, nextIndex));
        setAnimating(false);
      } else {
        onComplete(newAnswers.filter(a => a !== undefined));
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentIndex > 0 && !animating) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleForward = () => {
    if ((currentIndex < maxReachedIndex || (currentIndex === questions.length - 1 && hasAnsweredCurrent)) && !animating) {
      if (currentIndex < questions.length - 1) {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setAnimating(false);
        }, 300);
      } else {
        onComplete(answers.filter(a => a !== undefined));
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 py-8">
      {/* Barra de Progresso e Navegação Superior */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4 h-10">
          <div className="w-24">
            {currentIndex > 0 && (
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-medium text-sm group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Voltar
              </button>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Questão {currentIndex + 1} de {questions.length}
            </span>
          </div>

          <div className="w-24 flex justify-end">
            {showForwardButton && (
              <button 
                onClick={handleForward}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors font-medium text-sm group animate-fade-in"
              >
                {currentIndex === questions.length - 1 ? 'Finalizar' : 'Avançar'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
        
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-600 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card className="p-6 md:p-10 relative min-h-[400px]">
        <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {currentQuestion.category}
            </span>
            <h2 className="text-2xl font-bold text-slate-800 leading-snug">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="grid gap-4">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={`
                    group relative flex items-center w-full p-5 text-left border-2 rounded-2xl 
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isSelected 
                      ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500 shadow-sm' 
                      : 'border-slate-100 hover:border-teal-200 hover:bg-slate-50 focus:ring-teal-500'}
                  `}
                >
                  <div className="flex-1">
                    <span className={`text-lg font-medium transition-colors ${isSelected ? 'text-teal-900' : 'text-slate-700 group-hover:text-teal-900'}`}>
                      {option.text}
                    </span>
                  </div>
                  <div className={`transition-all duration-300 ml-4 ${isSelected ? 'text-teal-600 opacity-100' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`}>
                    {isSelected ? <CheckCircle2 className="w-6 h-6" /> : <ChevronRight />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Card>

      <div className="mt-6 text-center text-slate-400 text-xs italic">
        {currentIndex < maxReachedIndex 
          ? "Você está revisando uma questão anterior." 
          : "Responda para avançar automaticamente."}
      </div>
    </div>
  );
};