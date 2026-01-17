import { ProfileType, Question, Keyword, ProfileResult } from './types';

export const PROFILES: Record<ProfileType, ProfileResult> = {
  [ProfileType.A]: {
    type: ProfileType.A,
    name: "Influente",
    alias: "Sanguíneo",
    description: "Você é uma pessoa comunicativa, entusiasta e sociável. Sua energia contagia o ambiente e você adora interagir com pessoas.",
    strengths: ["Otimismo contagiante", "Facilidade de comunicação", "Criatividade", "Entusiasmo"],
    weaknesses: ["Desorganização", "Impulsividade", "Dificuldade em focar em detalhes"],
    color: "#fbbf24", // Amber
  },
  [ProfileType.B]: {
    type: ProfileType.B,
    name: "Dominante",
    alias: "Colérico",
    description: "Você é um líder natural, focado em resultados e metas. É direto, enérgico e gosta de resolver problemas rapidamente.",
    strengths: ["Liderança", "Determinação", "Foco em resultados", "Autoconfiança"],
    weaknesses: ["Impaciência", "Pode parecer insensível", "Dificuldade em delegar"],
    color: "#ef4444", // Red
  },
  [ProfileType.C]: {
    type: ProfileType.C,
    name: "Conforme",
    alias: "Melancólico",
    description: "Você é analítico, detalhista e busca a perfeição. Valoriza a qualidade, a lógica e o planejamento profundo.",
    strengths: ["Capacidade analítica", "Perfeccionismo", "Lealdade", "Organização"],
    weaknesses: ["Crítico demais", "Indecisão por excesso de análise", "Pessimismo"],
    color: "#3b82f6", // Blue
  },
  [ProfileType.D]: {
    type: ProfileType.D,
    name: "Estável",
    alias: "Fleumático",
    description: "Você é calmo, diplomático e um excelente ouvinte. Busca harmonia, evita conflitos e é muito consistente em suas tarefas.",
    strengths: ["Diplomacia", "Paciência", "Constância", "Bom ouvinte"],
    weaknesses: ["Acomodação", "Medo de mudanças", "Dificuldade em dizer não"],
    color: "#10b981", // Emerald
  },
};

export const QUESTIONS: Question[] = [
  // Trabalho
  {
    id: 1,
    category: "Trabalho",
    text: "Diante de um novo projeto desafiador, sua primeira reação é:",
    options: [
      { id: "1a", text: "Ficar empolgado com as novas possibilidades e reunir a equipe para brainstorm.", type: ProfileType.A },
      { id: "1b", text: "Definir imediatamente o objetivo final e traçar o caminho mais rápido para chegar lá.", type: ProfileType.B },
      { id: "1c", text: "Analisar os dados, riscos e criar um plano detalhado antes de começar.", type: ProfileType.C },
      { id: "1d", text: "Verificar como isso afeta a rotina atual e garantir que todos estejam confortáveis.", type: ProfileType.D },
    ],
  },
  {
    id: 2,
    category: "Trabalho",
    text: "Como você lida com prazos apertados?",
    options: [
      { id: "2b", text: "Trabalho intensamente e pressiono quem for necessário para entregar.", type: ProfileType.B },
      { id: "2a", text: "Tento negociar ou improvisar uma solução criativa de última hora.", type: ProfileType.A },
      { id: "2d", text: "Mantenho a calma e sigo o fluxo, fazendo o que é possível sem estresse.", type: ProfileType.D },
      { id: "2c", text: "Fico ansioso se a qualidade for comprometida, mas foco no detalhe essencial.", type: ProfileType.C },
    ],
  },
  {
    id: 3,
    category: "Trabalho",
    text: "O que mais te desmotiva no ambiente profissional?",
    options: [
      { id: "3c", text: "Falta de processos claros e desorganização generalizada.", type: ProfileType.C },
      { id: "3d", text: "Conflitos constantes e pressão agressiva.", type: ProfileType.D },
      { id: "3a", text: "Tarefas repetitivas, isolamento e falta de reconhecimento.", type: ProfileType.A },
      { id: "3b", text: "Lentidão, indecisão e falta de autonomia.", type: ProfileType.B },
    ],
  },
  // Social / Lazer
  {
    id: 4,
    category: "Social",
    text: "Em uma festa onde você conhece poucas pessoas, você:",
    options: [
      { id: "4a", text: "Rapidamente faço amizade, conto histórias e viro o centro das atenções.", type: ProfileType.A },
      { id: "4d", text: "Fico observando ou converso apenas com quem eu já conheço.", type: ProfileType.D },
      { id: "4b", text: "Aproveito para fazer networking se for útil, ou lidero a escolha do que fazer.", type: ProfileType.B },
      { id: "4c", text: "Prefiro conversas profundas com uma única pessoa a interagir com o grupo todo.", type: ProfileType.C },
    ],
  },
  {
    id: 5,
    category: "Social",
    text: "Ao planejar as férias em grupo, seu papel geralmente é:",
    options: [
      { id: "5c", text: "Pesquisar roteiros, preços e garantir que nada dê errado.", type: ProfileType.C },
      { id: "5a", text: "Animar o grupo e sugerir as atividades mais divertidas.", type: ProfileType.A },
      { id: "5d", text: "Concordar com a maioria para manter o clima agradável.", type: ProfileType.D },
      { id: "5b", text: "Decidir o destino e tomar as rédeas da organização logística.", type: ProfileType.B },
    ],
  },
  {
    id: 6,
    category: "Social",
    text: "Como você reage a uma surpresa inesperada?",
    options: [
      { id: "6d", text: "Fico tranquilo, não demonstro muita emoção externa.", type: ProfileType.D },
      { id: "6a", text: "Adoro! Expresso minha alegria de forma visível e barulhenta.", type: ProfileType.A },
      { id: "6c", text: "Desconfio ou fico preocupado com o impacto na minha programação.", type: ProfileType.C },
      { id: "6b", text: "Avalio rapidamente se é algo bom ou se vai atrapalhar meus planos.", type: ProfileType.B },
    ],
  },
  // Conflitos
  {
    id: 7,
    category: "Conflitos",
    text: "Durante uma discussão acalorada, você tende a:",
    options: [
      { id: "7b", text: "Impor minha opinião e falar mais alto para vencer o argumento.", type: ProfileType.B },
      { id: "7d", text: "Me calar ou ceder para acabar logo com a briga.", type: ProfileType.D },
      { id: "7a", text: "Levar para o lado emocional e, às vezes, falar coisas sem pensar.", type: ProfileType.A },
      { id: "7c", text: "Usar argumentos lógicos e fatos, ou me retirar se a conversa ficar irracional.", type: ProfileType.C },
    ],
  },
  {
    id: 8,
    category: "Conflitos",
    text: "Se alguém te critica injustamente, você:",
    options: [
      { id: "8c", text: "Guardo mágoa e fico remoendo aquilo por muito tempo.", type: ProfileType.C },
      { id: "8b", text: "Revido na hora e defendo meu ponto de vista com firmeza.", type: ProfileType.B },
      { id: "8a", text: "Fico triste no momento, mas logo esqueço e perdoo.", type: ProfileType.A },
      { id: "8d", text: "Ignoro para evitar estresse, mesmo que me incomode por dentro.", type: ProfileType.D },
    ],
  },
  {
    id: 9,
    category: "Conflitos",
    text: "Para resolver um problema complexo, você prefere:",
    options: [
      { id: "9a", text: "Discutir com outras pessoas para ter ideias novas.", type: ProfileType.A },
      { id: "9b", text: "Tomar uma decisão rápida e corrigir o curso depois, se necessário.", type: ProfileType.B },
      { id: "9c", text: "Estudar todas as variáveis antes de dar qualquer passo.", type: ProfileType.C },
      { id: "9d", text: "Esperar para ver se o problema se resolve ou buscar uma solução pacífica.", type: ProfileType.D },
    ],
  },
  // Planejamento
  {
    id: 10,
    category: "Planejamento",
    text: "Como é sua relação com a organização pessoal?",
    options: [
      { id: "10c", text: "Tudo tem seu lugar. Minha agenda é sagrada e detalhada.", type: ProfileType.C },
      { id: "10a", text: "Sou um pouco caótico, perco coisas, mas me acho na minha bagunça.", type: ProfileType.A },
      { id: "10b", text: "Organizo o essencial para ser eficiente, sem perfeccionismo exagerado.", type: ProfileType.B },
      { id: "10d", text: "Tenho uma rotina estável, mas não gosto de planejar muito a longo prazo.", type: ProfileType.D },
    ],
  },
  {
    id: 11,
    category: "Planejamento",
    text: "Ao fazer compras no supermercado:",
    options: [
      { id: "11a", text: "Compro o que me dá vontade na hora, muitas vezes fujo da lista.", type: ProfileType.A },
      { id: "11c", text: "Sigo rigorosamente a lista, comparo preços e leio rótulos.", type: ProfileType.C },
      { id: "11b", text: "Sou rápido, pego o que preciso e saio o quanto antes.", type: ProfileType.B },
      { id: "11d", text: "Sigo o mesmo caminho de sempre, comprando as marcas habituais.", type: ProfileType.D },
    ],
  },
  {
    id: 12,
    category: "Planejamento",
    text: "Sua meta de vida principal se aproxima mais de:",
    options: [
      { id: "12b", text: "Ter sucesso, poder e realizar grandes feitos.", type: ProfileType.B },
      { id: "12d", text: "Ter paz, estabilidade e uma vida tranquila.", type: ProfileType.D },
      { id: "12c", text: "Fazer tudo com excelência e corrigir o que está errado no mundo.", type: ProfileType.C },
      { id: "12a", text: "Ser feliz, ter muitos amigos e viver experiências intensas.", type: ProfileType.A },
    ],
  },
];

export const KEYWORDS: Keyword[] = [
  // A - Sanguíneo
  { id: "k1", text: "Expressivo", type: ProfileType.A },
  { id: "k2", text: "Entusiasta", type: ProfileType.A },
  { id: "k3", text: "Sociável", type: ProfileType.A },
  { id: "k4", text: "Espontâneo", type: ProfileType.A },
  { id: "k5", text: "Otimista", type: ProfileType.A },
  // B - Colérico
  { id: "k6", text: "Determinado", type: ProfileType.B },
  { id: "k7", text: "Competitivo", type: ProfileType.B },
  { id: "k8", text: "Independente", type: ProfileType.B },
  { id: "k9", text: "Corajoso", type: ProfileType.B },
  { id: "k10", text: "Produtivo", type: ProfileType.B },
  // C - Melancólico
  { id: "k11", text: "Detalhista", type: ProfileType.C },
  { id: "k12", text: "Analítico", type: ProfileType.C },
  { id: "k13", text: "Sensível", type: ProfileType.C },
  { id: "k14", text: "Organizado", type: ProfileType.C },
  { id: "k15", text: "Idealista", type: ProfileType.C },
  // D - Fleumático
  { id: "k16", text: "Calmo", type: ProfileType.D },
  { id: "k17", text: "Paciente", type: ProfileType.D },
  { id: "k18", text: "Diplomático", type: ProfileType.D },
  { id: "k19", text: "Conservador", type: ProfileType.D },
  { id: "k20", text: "Equilibrado", type: ProfileType.D },
].sort(() => Math.random() - 0.5); // Shuffle initially for display