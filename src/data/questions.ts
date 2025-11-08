import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    title: "1. Porcas e Parafusos",
    statement: "O castor Bruno trabalha na linha de montagem de porcas e parafusos. Se Bruno tirar uma porca, coloca-a no balde. Se tirar um parafuso, pega numa porca do balde, enrosca-a no parafuso e coloca a peça montada numa caixa. Que sequência, quando processada da esquerda para a direita, não causará problemas ao Bruno?",
    options: [
      "A) Porca-Parafuso-Parafuso-Porca-Porca-Porca-Porca-Parafuso-Parafuso-Parafuso",
      "B) Porca-Porca-Parafuso-Porca-Porca-Parafuso-Parafuso-Parafuso-Parafuso-Porca",
      "C) Porca-Parafuso-Porca-Porca-Parafuso-Porca-Porca-Parafuso-Parafuso-Parafuso",
      "D) Porca-Porca-Parafuso-Parafuso-Porca-Parafuso-Porca-Porca-Porca-Parafuso"
    ],
    correctAnswer: 2,
    explanation: "A resposta C está correta porque o balde nunca fica vazio quando Bruno precisa de uma porca, e no final não sobram porcas no balde.",
    computationalThinking: "Esta tarefa destaca a utilização de um autómato com pilha (pushdown automaton). Um PDA é uma forma de descrever um algoritmo que se baseia no estado atual e tem memória sob a forma de uma pilha. Nesta tarefa, o estado é ter uma porca ou parafuso no tapete, e a pilha é o balde que contém as porcas.",
    difficulty: 'fácil',
    imageUrl: "https://images.pexels.com/photos/5707255/pexels-photo-5707255.jpeg",
    imageAlt: "Montagem industrial com ferramentas"
  },
  {
    id: 2,
    title: "2. Miss Infinito",
    statement: "Três estudantes (A, D e I) começaram a chamar 'Miss Infinito' à nova professora de Matemática. A alcunha espalha-se: se mais de metade dos colegas com quem um estudante fala usarem a alcunha, esse estudante irá usá-la no dia seguinte. Qual é o dia em que todos os alunos usam a alcunha pela primeira vez?",
    options: [
      "A) Terça-feira",
      "B) Quarta-feira",
      "C) Quinta-feira",
      "D) Sexta-feira"
    ],
    correctAnswer: 3,
    explanation: "A resposta correta é Sexta-feira. Na terça-feira, C e G começam a usar. Na quarta-feira, B começa. Na quinta-feira, E começa. E na sexta-feira F e H começam a usar a alcunha.",
    computationalThinking: "As redes sociais têm um papel fundamental na difusão de informação. Esta tarefa considera um modelo de difusão chamado modelo de limite, onde existe um limiar para cada indivíduo (a fração das suas ligações que deve estar ativa para que o indivíduo se torne ativo).",
    difficulty: 'fácil',
    imageUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
    imageAlt: "Escola com estudantes"
  },
  {
    id: 3,
    title: "3. Jogo do Galo",
    statement: "O Jogo do Galo é para dois jogadores que marcam X ou O numa grelha 3x3. O primeiro que conseguir três marcas em linha ganha. Qual das seguintes imagens é a única folha de resultados válida de um jogo completo?",
    options: [
      "A) X-O-X / O-X-O / O-O-X",
      "B) X-O-X / O-X--- / O-X-X",
      "C) X-X-O / ---O-X / O-O-X",
      "D) X-O-X / O-X-O / O-X---"
    ],
    correctAnswer: 2,
    explanation: "A resposta C está correta porque o jogador O venceu e depois o jogo terminou, respeitando todas as regras do jogo.",
    computationalThinking: "Resolvemos verificando se as imagens eram plausíveis. A partir das regras do jogo, podemos deduzir regras sobre a estrutura de uma folha de resultados válida. As regras são muito importantes nos sistemas computacionais de processamento de dados.",
    difficulty: 'fácil',
    imageUrl: "https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg",
    imageAlt: "Jogo do galo em papel"
  },
  {
    id: 4,
    title: "4. Barragens dos Castores",
    statement: "Seis castores (A-F) construíram barragens ao longo da ribeira. Após uma tempestade, os pedaços de madeira foram arrastados ribeira abaixo. A julgar pelos pedaços que cada castor apanhou, qual é a ordem das barragens, de montante a jusante?",
    options: [
      "A) A → B → C → D → E → F",
      "B) C → B → F → A → D → E",
      "C) C → F → B → D → A → E",
      "D) E → C → F → B → A → D"
    ],
    correctAnswer: 3,
    explanation: "A resposta correta é E → C → F → B → A → D. Se o castor α encontra pedaços do castor β, então β está a montante de α.",
    computationalThinking: "Um grafo acíclico dirigido (DAG) consiste em vértices e arestas direcionadas sem ciclos. Alinhar os castores na ordem correta chama-se ordenação topológica. Esta é utilizada em processamento de agendamentos, serialização de dados e resolução de dependências.",
    difficulty: 'fácil',
    imageUrl: "https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg",
    imageAlt: "Barragem de castor num rio"
  },
  {
    id: 5,
    title: "5. Velas Coloridas",
    statement: "O Simão tem velas numeradas 0-9 em três cores (0,3,6,9=laranja; 1,4,7=vermelho; 2,5,8=azul). No seu aniversário, coloca velas para representar a idade. Se ambas as velas tiverem a mesma cor, ganha um presente extra. Qual será o tempo máximo de espera entre dois aniversários com velas da mesma cor?",
    options: [
      "A) 5 anos",
      "B) 6 anos",
      "C) 7 anos",
      "D) 8 anos"
    ],
    correctAnswer: 0,
    explanation: "A resposta correta é 5 anos. A espera máxima ocorre quando Y é 7 (velas vermelhas 1,4,7) e a próxima idade com mesma cor é 5 anos depois.",
    computationalThinking: "Esta tarefa é um exemplo de análise de algoritmo. É-nos dado um algoritmo que gera uma sequência de pares de cores. Demoraria demasiado simular toda a sequência, pelo que devemos analisar as propriedades do algoritmo.",
    difficulty: 'fácil',
    imageUrl: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg",
    imageAlt: "Bolo de aniversário com velas"
  },
  {
    id: 6,
    title: "6. Feiticeiro",
    statement: "Num castelo vive um feiticeiro que pode transformar-se numa fada ou criar uma fada. A fada pode transformar-se em poção e dragão, ou em poção-feiticeiro-dragão. Começando com um único feiticeiro, qual estado do castelo NÃO é possível obter?",
    options: [
      "A) Poção-Feiticeiro-Poção-Dragão-Dragão",
      "B) Feiticeiro-Poção-Fada-Dragão-Poção-Fada-Poção-Dragão",
      "C) Fada-Poção-Dragão-Poção-Feiticeiro-Dragão",
      "D) Poção-Dragão-Poção-Dragão"
    ],
    correctAnswer: 1,
    explanation: "A resposta B não é possível. As regras de transformação criam sempre uma poção e um dragão ao mesmo tempo, portanto o número de poções será sempre igual ao número de dragões.",
    computationalThinking: "As transformações mágicas podem ser vistas como um conjunto de regras para gerar padrões. Em ciência de computadores, uma gramática livre de contexto é uma ferramenta usada para descrever regras que geram padrões e linguagens.",
    difficulty: 'média',
    imageUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
    imageAlt: "Castelo medieval"
  },
  {
    id: 7,
    title: "7. Aldeias Entrelaçadas",
    statement: "As aldeias de Repolholândia, Morangolândia e Cenourolândia cresceram e sobrepuseram-se. Cada nova casa é atribuída à aldeia mais comum entre as X casas mais próximas. A Casa 1 foi construída antes da Casa 2. Qual é o valor mais baixo de X para que a Casa 2 seja atribuída a Morangolândia?",
    options: [
      "A) 3",
      "B) 4",
      "C) 5",
      "D) 6"
    ],
    correctAnswer: 2,
    explanation: "A resposta correta é X=5. Com X=5, a Casa 1 é atribuída a Cenourolândia, e a Casa 2 é atribuída a Morangolândia porque três dos seus cinco vizinhos mais próximos são de Morangolândia.",
    computationalThinking: "A regra para atribuir casas é um exemplo do algoritmo k-nearest neighbors (kNN). O kNN classifica dados novos olhando para os k dados mais semelhantes já classificados. É usado em aprendizagem automática por ser fácil de implementar.",
    difficulty: 'média',
    imageUrl: "https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg",
    imageAlt: "Aldeias com casas"
  },
  {
    id: 8,
    title: "8. Labirinto",
    statement: "Um castor está num labirinto de dois andares. Pode mover-se entre células adjacentes (1 segundo) ou usar a varinha mágica para mudar de piso (5 segundos). Começa na célula A e quer chegar à célula B o mais rapidamente possível. Qual é o tempo mais curto?",
    options: [
      "A) 16 segundos",
      "B) 17 segundos",
      "C) 18 segundos",
      "D) 20 segundos"
    ],
    correctAnswer: 2,
    explanation: "A resposta correta é 18 segundos. O caminho ótimo inclui uma mudança de piso e movimentos dentro dos pisos para chegar de A a B.",
    computationalThinking: "O problema do caminho mais curto é bem estudado em teoria de grafos. O algoritmo de Dijkstra é um método conhecido para resolvê-lo. Aplicações incluem encontrar caminhos em redes informáticas e no desenho de circuitos VLSI.",
    difficulty: 'média',
    imageUrl: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg",
    imageAlt: "Labirinto"
  },
  {
    id: 9,
    title: "9. Listas",
    statement: "Temos três listas: A=[3,2,4,1,5], B=[5,4,1,3,2], C=[2,5,4,3,1]. (X 2) significa o número na posição 2. Podemos usar posições indiretas como (X (X 3)). Qual é o número descrito por (A (B (C 3)))?",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    correctAnswer: 3,
    explanation: "(C 3)=4, portanto (B (C 3))=(B 4)=3, então (A (B (C 3)))=(A 3)=4.",
    computationalThinking: "Estruturas de dados que contêm listas são essenciais para programação. As estruturas podem ser interligadas, de modo que um elemento de uma lista pode descrever uma posição noutra lista. Esta forma indireta de descrever posições é um conceito poderoso.",
    difficulty: 'média',
    imageUrl: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    imageAlt: "Estruturas de dados"
  },
  {
    id: 10,
    title: "10. Base de Dados dos Castores",
    statement: "Uma base de dados regista castores em sequências de 16 bits (família, género, peso, qualificação, comida preferida). Que conjunto de castores denota: b11 e não(b10) e b9 e b7 e não(b3 e b2)?",
    options: [
      "A) Fêmeas que pesam pelo menos 16 kg, trabalhador experiente em armazém de comida",
      "B) Machos que pesam pelo menos 64 kg, trabalhador experiente em construção de alojamentos ou barragens",
      "C) Machos que pesam entre 40-63 kg, trabalhador experiente em construção ou armazém de comida",
      "D) Machos que pesam no máximo 39 kg, trabalhador experiente em construção de barragens"
    ],
    correctAnswer: 2,
    explanation: "b11=1 significa macho, b10=0 significa pesar no máximo 63 kg, b9=1 e b7=1 significa pesar pelo menos 40 kg, e não(b3 e b2) exclui apenas educação de jovens castores.",
    computationalThinking: "Uma expressão booleana pode ser usada para consultar bases de dados simples. Os operadores booleanos não, e, ou são fundamentais. Os circuitos booleanos estão na base de componentes digitais usados em computadores.",
    difficulty: 'média',
    imageUrl: "https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg",
    imageAlt: "Base de dados digital"
  },
  {
    id: 11,
    title: "11. AI dos Castores",
    statement: "Um sistema AI aprende a identificar castores pelo tamanho. Treinou com exemplos e decidiu que castores têm tamanhos entre 38 e 85. Depois de um novo exemplo (42 não é castor), como classifica animais de tamanho 48 e 84?",
    options: [
      "A) castor, castor",
      "B) castor, não castor",
      "C) não castor, castor",
      "D) não castor, não castor"
    ],
    correctAnswer: 2,
    explanation: "Após o novo exemplo, o limite inferior muda para 53.5 (ponto médio entre 42 e 65). Portanto, 48 é não castor e 84 é castor.",
    computationalThinking: "O sistema aplica um algoritmo de Aprendizagem Automática (Machine Learning). Os algoritmos ML constroem modelos baseados em dados de treino para fazer previsões. A qualidade depende fortemente da qualidade dos dados de formação.",
    difficulty: 'difícil',
    imageUrl: "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg",
    imageAlt: "Inteligência artificial"
  },
  {
    id: 12,
    title: "12. Um Jogo de Corte e Rato",
    statement: "Bruno e Rui jogam um jogo cortando segmentos de uma figura em forma de rato. Bruno corta azuis, Rui corta vermelhos. Cortar um segmento remove-o e todos os que ficam desligados do chão. Se Bruno jogar primeiro e fizer sempre a melhor jogada, qual segmento deve cortar primeiro para garantir vitória?",
    options: [
      "A) Segmento 1",
      "B) Segmento 2",
      "C) Segmento 3",
      "D) Segmento 4"
    ],
    correctAnswer: 1,
    explanation: "A resposta correta é o Segmento 2. Cortando o Segmento 2, Bruno pode forçar o Rui numa posição perdedora independentemente das jogadas do Rui.",
    computationalThinking: "O jogo Hackenbush pertence aos jogos combinatórios. Áreas de interesse incluem determinar o vencedor com jogo perfeito, formular estratégias e criar heurísticas. As árvores de jogo enumeram posições possíveis em cada jogada.",
    difficulty: 'difícil',
    imageUrl: "https://images.pexels.com/photos/5632394/pexels-photo-5632394.jpeg",
    imageAlt: "Jogo estratégico"
  },
  {
    id: 13,
    title: "13. Empacotar",
    statement: "Quatro caixas de cerveja (15, 12, 8, 5 garrafas) devem ser colocadas num recipiente retangular com o mínimo de lacunas. Quantas garrafas teriam de ser adicionadas para preencher o recipiente?",
    options: [
      "A) 0",
      "B) 1",
      "C) 2",
      "D) 3"
    ],
    correctAnswer: 2,
    explanation: "A resposta correta é 2 garrafas. O total é 38 garrafas. Com 2 lacunas, temos 40 garrafas num recipiente 5x8, que permite encaixar todas as quatro caixas perfeitamente.",
    computationalThinking: "Esta tarefa é um Problema de Empacotamento. É um problema de otimização onde queremos encontrar a melhor solução. Pode ser muito difícil quando o número de caixas é grande. Usam-se algoritmos que fornecem soluções aproximadas suficientemente boas.",
    difficulty: 'difícil',
    imageUrl: "https://images.pexels.com/photos/5632393/pexels-photo-5632393.jpeg",
    imageAlt: "Caixas empacotadas"
  },
  {
    id: 14,
    title: "14. Recolhendo Pedras",
    statement: "31 pedras precisam ser removidas de canais. Os castores carregam 1-2 pedras e nadam 1 hora por canal. Devem recolher todas as pedras em 4 horas. Quantos castores são precisos no mínimo?",
    options: [
      "A) 14 castores",
      "B) 18 castores",
      "C) 20 castores",
      "D) 24 castores"
    ],
    correctAnswer: 0,
    explanation: "A resposta correta é 14 castores. Existe apenas um caminho de 2 horas com 4 pedras (2 castores podem reutilizar este caminho). As restantes 23 pedras requerem 12 castores adicionais.",
    computationalThinking: "Os cientistas informáticos removem informação desnecessária e representam o problema como um grafo (nós e arestas). Os problemas que procuram a melhor solução são problemas de otimização, muito comuns em ciência de computadores.",
    difficulty: 'difícil',
    imageUrl: "https://images.pexels.com/photos/5632392/pexels-photo-5632392.jpeg",
    imageAlt: "Castores no rio"
  },
  {
    id: 15,
    title: "15. Jóia Favorita",
    statement: "Sara quer descobrir qual é a jóia favorita de Tiago. Pode fazer três perguntas, cada uma sobre quatro jóias: 'Destas quatro, qual é a tua favorita?'. Qual é o maior número de jóias que a coleção pode ter se Sara conseguir descobrir a favorita?",
    options: [
      "A) 8 jóias",
      "B) 10 jóias",
      "C) 11 jóias",
      "D) 12 jóias"
    ],
    correctAnswer: 1,
    explanation: "A resposta correta é 10 jóias. Com as duas primeiras perguntas, Sara pergunta sobre 8 jóias diferentes. Com a terceira pergunta, inclui as duas candidatas e duas jóias não perguntadas.",
    computationalThinking: "Para resolver, precisamos encontrar a melhor estratégia (algoritmo) para Sara. Avaliamos o algoritmo para encontrar o número máximo para o qual funciona. Em geral, avaliamos algoritmos pelo tempo de execução e quantidade de espaço (memória) utilizado.",
    difficulty: 'difícil',
    imageUrl: "https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg",
    imageAlt: "Jóias e acessórios"
  }
];
