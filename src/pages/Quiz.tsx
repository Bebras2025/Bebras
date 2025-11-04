import { useState, useEffect } from 'react';
import { Check, X, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { questions } from '../data/questions';

interface QuizProps {
  onNavigate: (page: string) => void;
}

export default function Quiz({ onNavigate }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bebras-quiz-progress');
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentQuestion(data.currentQuestion || 0);
      setAnswers(data.answers || Array(questions.length).fill(null));
      setShowResults(data.showResults || false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bebras-quiz-progress', JSON.stringify({
      currentQuestion,
      answers,
      showResults
    }));
  }, [currentQuestion, answers, showResults]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    localStorage.removeItem('bebras-quiz-progress');
  };

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    answers.forEach((answer, index) => {
      if (answer !== null) {
        if (answer === questions[index].correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });
    return { correct, incorrect, total: questions.length };
  };

  if (showResults) {
    const { correct, incorrect, total } = calculateResults();
    const percentage = Math.round((correct / total) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Concluído!</h2>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
                  <div className="text-3xl font-bold text-green-600 mb-2">{correct}</div>
                  <div className="text-sm text-gray-600">Respostas Corretas</div>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-500">
                  <div className="text-3xl font-bold text-red-600 mb-2">{incorrect}</div>
                  <div className="text-sm text-gray-600">Respostas Incorretas</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{percentage}%</div>
                  <div className="text-sm text-gray-600">Pontuação Final</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((q, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return (
                  <div key={q.id} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-bold text-lg text-gray-800">{q.title}</h3>
                      {isCorrect ? (
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-gray-700 mb-4">{q.statement}</p>

                    <div className="space-y-2 mb-4">
                      {q.options.map((option, optIndex) => {
                        const isUserAnswer = userAnswer === optIndex;
                        const isCorrectAnswer = optIndex === q.correctAnswer;

                        return (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg border-2 ${
                              isCorrectAnswer
                                ? 'border-green-500 bg-green-50'
                                : isUserAnswer && !isCorrect
                                ? 'border-red-500 bg-red-50'
                                : 'border-gray-200 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{option}</span>
                              {isCorrectAnswer && <Check className="w-5 h-5 text-green-600" />}
                              {isUserAnswer && !isCorrect && <X className="w-5 h-5 text-red-600" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                        <p className="font-bold text-blue-800 mb-1">Explicação:</p>
                        <p className="text-gray-700 text-sm">{q.explanation}</p>
                      </div>

                      <div className="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
                        <p className="font-bold text-purple-800 mb-1">Pensamento Computacional:</p>
                        <p className="text-gray-700 text-sm">{q.computationalThinking}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center gap-2"
              >
                <RotateCcw size={20} />
                Reiniciar Quiz
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const allAnswered = answers.every(answer => answer !== null);
  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentAnswer = answers[currentQuestion];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'fácil': return 'bg-green-100 text-green-800';
      case 'média': return 'bg-yellow-100 text-yellow-800';
      case 'difícil': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600">
                  Respondidas: {answeredCount}/{questions.length}
                </span>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getDifficultyColor(question.difficulty)}`}>
                  {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-600 to-teal-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{question.title}</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{question.statement}</p>

            <div className="space-y-4 mb-6">
              {question.options.map((option, index) => {
                const isSelected = currentAnswer === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentQuestion === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <ChevronLeft size={20} />
                Anterior
              </button>

              {!isLastQuestion ? (
                <button
                  onClick={handleNext}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2"
                >
                  Próxima
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={!allAnswered}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    allAnswered
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submeter Quiz
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            {isLastQuestion && !allAnswered && (
              <p className="text-center text-red-600 text-sm mt-4">
                Por favor, responda a todas as perguntas antes de submeter o quiz.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
