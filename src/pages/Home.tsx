import { BookOpen, Brain, Trophy } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">🦫</div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Bebras — Castor Informático 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              O Desafio Internacional de Pensamento Computacional
            </p>
            <button
              onClick={() => onNavigate('quiz')}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg"
            >
              Começar Quiz
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Trophy className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-center mb-2">15 Problemas</h3>
              <p className="text-gray-600 text-center text-sm">
                Resolve desafios de diferentes níveis de dificuldade
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-center mb-2">Pensamento Computacional</h3>
              <p className="text-gray-600 text-center text-sm">
                Aprende conceitos fundamentais de informática
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-green-500 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-center mb-2">Explicações Detalhadas</h3>
              <p className="text-gray-600 text-center text-sm">
                Compreende a resolução de cada problema
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que é o Bebras?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                O <strong>Bebras - Castor Informático</strong> é uma iniciativa internacional destinada a promover o pensamento
                computacional e a Informática (Ciência de Computadores). Foi desenhado para motivar alunos de todo
                o mundo e de todas as idades mesmo que não tenham experiência prévia.
              </p>
              <p>
                Tem já uma longa história e foi iniciado em 2004 pela Prof. Valentina Dagienė, da Universidade de
                Vilnius, na Lituânia. O seu nome original vem dessa origem - "bebras" significa "castor" em lituano. A
                comunidade internacional adotou esse nome, porque os castores buscam a perfeição no seu dia-a-dia e são
                conhecidos por serem muito trabalhadores e inteligentes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que é o Pensamento Computacional?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                O pensamento computacional é um conjunto de técnicas de resolução de problemas que envolve a maneira
                de expressar um problema e a sua solução de modo a que um computador (seja um humano ou máquina)
                a possa executar. É muito mais do que simplesmente saber programar e envolve vários níveis de abstração
                e as capacidades mentais que são necessárias para não só desenhar programas e aplicações, mas também
                saber explicar e interpretar um mundo como um sistema complexo de processos de informação.
              </p>
              <p>
                A expressão "pensamento computacional" tornou-se conhecida em 2006 e pode ser vista como a nova
                literacia do século XXI. O desafio do Bebras promove precisamente este tipo de habilidades e conceitos
                informáticos como a capacidade de partir um problema complexo em problemas mais simples, o desenho
                de algoritmos, o reconhecimento de padrões ou a capacidade de generalizar e abstrair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
