export default function ComputationalThinking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Pensamento Computacional</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">O que é Pensamento Computacional?</h2>
              <p>
                O pensamento computacional é um processo mental para resolução de problemas que inclui a formulação
                de problemas de forma que as suas soluções possam ser representadas como passos computacionais e algoritmos.
                É uma habilidade fundamental para todos, não apenas para cientistas da computação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Pilares do Pensamento Computacional</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Decomposição</h3>
                  <p className="text-sm">
                    Dividir um problema complexo em partes menores e mais gerenciáveis.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">Reconhecimento de Padrões</h3>
                  <p className="text-sm">
                    Identificar semelhanças e diferenças para fazer previsões e encontrar soluções.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">Abstração</h3>
                  <p className="text-sm">
                    Focar nos detalhes importantes e ignorar informações irrelevantes.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">Algoritmos</h3>
                  <p className="text-sm">
                    Desenvolver soluções passo a passo para resolver problemas.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Importância</h2>
              <p>
                O pensamento computacional não se trata apenas de computadores - é sobre como pensamos e resolvemos
                problemas. Estas competências são aplicáveis em todas as áreas do conhecimento e são essenciais no
                século XXI, onde a capacidade de processar informação e resolver problemas complexos é fundamental.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Aplicações</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Resolução de problemas do quotidiano</li>
                <li>Desenvolvimento de software e aplicações</li>
                <li>Análise de dados e tomada de decisões</li>
                <li>Automatização de tarefas repetitivas</li>
                <li>Modelação de sistemas complexos</li>
                <li>Inovação e criatividade em todas as áreas</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
