import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { KeywordScreen } from './components/KeywordScreen';
import { ResultScreen } from './components/ResultScreen';
import { QUESTIONS, KEYWORDS } from './constants';
import { Option, Keyword } from './types';

type Step = 'welcome' | 'quiz' | 'keywords' | 'results';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<Option[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);

  const handleStart = () => {
    setCurrentStep('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (answers: Option[]) => {
    setQuizAnswers(answers);
    setCurrentStep('keywords');
    window.scrollTo(0, 0);
  };

  const handleKeywordsComplete = (keywords: Keyword[]) => {
    setSelectedKeywords(keywords);
    setCurrentStep('results');
    window.scrollTo(0, 0);
  };

  const handleRestart = () => {
    setQuizAnswers([]);
    setSelectedKeywords([]);
    setCurrentStep('welcome');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    T
                </div>
                <span className="font-semibold text-slate-700 tracking-tight">Temperament Compass</span>
            </div>
            {currentStep !== 'welcome' && (
                <div className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                   {currentStep === 'quiz' && 'Fase 1: Situações'}
                   {currentStep === 'keywords' && 'Fase 2: Identidade'}
                   {currentStep === 'results' && 'Relatório Final'}
                </div>
            )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-2 md:px-4 py-6">
        {currentStep === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}
        
        {currentStep === 'quiz' && (
          <QuizScreen 
            questions={QUESTIONS} 
            onComplete={handleQuizComplete} 
          />
        )}

        {currentStep === 'keywords' && (
          <KeywordScreen 
            keywords={KEYWORDS} 
            onComplete={handleKeywordsComplete} 
          />
        )}

        {currentStep === 'results' && (
          <ResultScreen 
            quizAnswers={quizAnswers} 
            selectedKeywords={selectedKeywords}
            onRestart={handleRestart}
          />
        )}
      </main>
    </div>
  );
};

export default App;