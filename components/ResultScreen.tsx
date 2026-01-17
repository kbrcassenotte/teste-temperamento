import React, { useMemo } from 'react';
import { Option, Keyword, ProfileType, ScoreMap, ProfileResult } from '../types';
import { PROFILES } from '../constants';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { RefreshCw, Share2, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ResultScreenProps {
  quizAnswers: Option[];
  selectedKeywords: Keyword[];
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ quizAnswers, selectedKeywords, onRestart }) => {
  
  const results = useMemo(() => {
    // Initialize scores
    const scores: ScoreMap = {
      [ProfileType.A]: 0,
      [ProfileType.B]: 0,
      [ProfileType.C]: 0,
      [ProfileType.D]: 0,
    };

    // Calculate Quiz Scores (Weight: 2)
    quizAnswers.forEach(ans => {
      scores[ans.type] += 2;
    });

    // Calculate Keyword Scores (Weight: 1)
    selectedKeywords.forEach(kw => {
      scores[kw.type] += 1;
    });

    // Calculate Total for Percentages
    const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0);

    // Prepare Chart Data
    const chartData = Object.keys(scores).map(key => {
        const type = key as ProfileType;
        return {
            name: PROFILES[type].alias,
            score: scores[type],
            percentage: Math.round((scores[type] / totalPoints) * 100),
            color: PROFILES[type].color,
            fullData: PROFILES[type]
        };
    }).sort((a, b) => b.score - a.score);

    const predominantProfile = chartData[0];

    return {
        scores,
        chartData,
        predominantProfile,
    };
  }, [quizAnswers, selectedKeywords]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Link copiado para a área de transferência!");
    });
  };

  const WinnerProfile = results.predominantProfile.fullData;

  return (
    <div className="max-w-5xl mx-auto p-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Result Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-8 border-t-8" style={{ borderColor: WinnerProfile.color }}>
            <div className="mb-2 uppercase tracking-wide text-xs font-bold text-slate-400">
              Seu temperamento predominante é
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              {WinnerProfile.alias} <span className="text-lg font-normal text-slate-500">({WinnerProfile.name})</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {WinnerProfile.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-teal-50 p-4 rounded-xl">
                <h3 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Pontos Fortes
                </h3>
                <ul className="space-y-1">
                  {WinnerProfile.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-teal-700">• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-50 p-4 rounded-xl">
                <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Pontos de Atenção
                </h3>
                <ul className="space-y-1">
                  {WinnerProfile.weaknesses.map((w, i) => (
                    <li key={i} className="text-sm text-rose-700">• {w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Detailed Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Composição do seu Perfil</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={results.chartData} margin={{ left: 20, right: 30 }}>
                        <XAxis type="number" hide />
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            tick={{ fill: '#475569', fontSize: 14, fontWeight: 500 }}
                            width={100}
                        />
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="percentage" radius={[0, 4, 4, 0]} barSize={32}>
                            {results.chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-400 px-2">
                {results.chartData.map((d, i) => (
                    <div key={i} className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: d.color}}></div>
                        <span>{d.percentage}%</span>
                    </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6">
            <Card className="p-6 bg-slate-800 text-white">
                <h3 className="text-xl font-bold mb-4">Próximos Passos</h3>
                <p className="text-slate-300 mb-6 text-sm">
                    Agora que você conhece seu perfil, use este conhecimento para melhorar sua comunicação e liderança.
                </p>
                <div className="space-y-3">
                    <Button onClick={handleShare} fullWidth variant="secondary" className="flex items-center justify-center gap-2">
                        <Share2 className="w-4 h-4" /> Compartilhar
                    </Button>
                    <Button onClick={onRestart} fullWidth variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-700 flex items-center justify-center gap-2">
                        <RefreshCw className="w-4 h-4" /> Refazer Teste
                    </Button>
                </div>
            </Card>

            <div className="text-center text-xs text-slate-400 mt-8">
                <p>Desenvolvido para análise comportamental profissional.</p>
            </div>
        </div>

      </div>
    </div>
  );
};