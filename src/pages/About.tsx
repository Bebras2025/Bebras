export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Bebras</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">O que é?</h2>
              <p>
                O Bebras é uma iniciativa internacional que visa promover a Informática (Ciências da Computação)
                e o pensamento computacional entre estudantes de todas as idades. Foi iniciado em 2004 na Lituânia
                e expandiu-se para mais de 50 países em todo o mundo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Objetivo</h2>
              <p>
                O principal objetivo do desafio Bebras é motivar os jovens a se interessarem pela Informática,
                mostrando que esta área é divertida, interessante e relevante. Os problemas propostos não requerem
                conhecimentos prévios de programação, focando-se em conceitos fundamentais de pensamento computacional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Formato</h2>
              <p>
                O desafio consiste em resolver uma série de problemas lógicos e puzzles que envolvem conceitos
                como algoritmos, estruturas de dados, padrões, lógica e decomposição de problemas. Cada problema
                está associado a um conceito específico de pensamento computacional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Categorias</h2>
              <p>
                O Bebras está organizado em diferentes categorias de idade, desde o ensino primário até ao
                secundário, garantindo que os desafios são apropriados para cada nível de desenvolvimento.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
