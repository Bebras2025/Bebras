export interface Question {
  id: number;
  title: string;
  statement: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  computationalThinking: string;
  difficulty: 'fácil' | 'média' | 'difícil';
}
