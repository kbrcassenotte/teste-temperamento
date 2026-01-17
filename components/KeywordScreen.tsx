import React, { useState } from 'react';
import { Keyword } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Check, AlertCircle } from 'lucide-react';

interface KeywordScreenProps {
  keywords: Keyword[];
  onComplete: (selected: Keyword[]) => void;
}

export const KeywordScreen: React.FC<KeywordScreenProps> = ({ keywords, onComplete }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleKeyword = (keywordId: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(keywordId)) {
      newSet.delete(keywordId);
    } else {
      if (newSet.size >= 5) return; // Limit to 5
      newSet.add(keywordId);
    }
    setSelectedIds(newSet);
  };

  const handleSubmit = () => {
    const selectedKeywords = keywords.filter(k => selectedIds.has(k.id));
    onComplete(selectedKeywords);
  };

  const isComplete = selectedIds.size === 5;

  return (
    <div className="max-w-4xl mx-auto p-4 py-8 flex flex-col items-center">
      <Card className="w-full p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Quem é você hoje?
          </h2>
          <p className="text-slate-600">
            Selecione exatamente <strong>5 palavras</strong> que melhor descrevem seu comportamento atual.
          </p>
          
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
            <span className={`font-bold ${isComplete ? 'text-teal-600' : 'text-slate-500'}`}>
              {selectedIds.size} / 5
            </span>
            <span className="text-sm text-slate-500">selecionadas</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {keywords.map((keyword) => {
            const isSelected = selectedIds.has(keyword.id);
            const isDisabled = !isSelected && selectedIds.size >= 5;
            
            return (
              <button
                key={keyword.id}
                onClick={() => toggleKeyword(keyword.id)}
                disabled={isDisabled}
                className={`
                  relative px-4 py-2 rounded-full text-base font-medium transition-all duration-200
                  ${isSelected 
                    ? 'bg-teal-600 text-white shadow-md scale-105' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50'}
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {keyword.text}
                {isSelected && <Check className="inline-block w-4 h-4 ml-2" />}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          {!isComplete && (
            <div className="flex items-center gap-2 text-rose-500 text-sm animate-pulse">
              <AlertCircle className="w-4 h-4" />
              <span>Selecione mais {5 - selectedIds.size} palavras para continuar</span>
            </div>
          )}
          
          <Button 
            onClick={handleSubmit} 
            disabled={!isComplete}
            variant={isComplete ? 'primary' : 'ghost'}
            className="w-full md:w-auto min-w-[200px]"
          >
            Ver Meu Resultado
          </Button>
        </div>
      </Card>
    </div>
  );
};