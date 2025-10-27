export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © 2025 Bebras - Castor Informático | Edição 2025 - Categoria Seniores
        </p>
        <p className="text-sm text-gray-400">
          Site criado pelos alunos do 11º ano de Programação Informática da Escola Profissional Raul Dória
        </p>
        <a
          href="https://bebras.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-teal-400 hover:text-teal-300 transition-colors"
        >
          Visitar bebras.pt
        </a>
      </div>
    </footer>
  );
}
