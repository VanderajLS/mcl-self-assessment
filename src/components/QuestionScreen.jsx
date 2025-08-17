import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Check } from 'lucide-react'

const QuestionScreen = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  showFeedback, 
  isLastQuestion,
  onAnswerSelect, 
  onNextQuestion 
}) => {
  const navigate = useNavigate()

  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [questionNumber])

  const handleAnswerClick = (answerIndex) => {
    if (!showFeedback) {
      onAnswerSelect(answerIndex)
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      navigate('/profile')
    } else {
      onNextQuestion()
    }
  }

  const isCorrect = selectedAnswer === question.correctAnswer
  const feedbackMessage = showFeedback ? (isCorrect ? question.feedback.correct : question.feedback.incorrect) : ''

  return (
    <div className="mcl-container">
      <div className="max-w-3xl w-full mcl-fade-in">
        {/* Progress indicator */}
        <div className="mb-8 text-center">
          <p className="text-sm text-muted-foreground mb-3 font-mono">
            Question {questionNumber} of {totalQuestions}
          </p>
          <div className="mcl-progress-bar">
            <div 
              className="mcl-progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="mcl-subtitle">
            {question.question}
          </h2>
        </div>

        {/* Answer options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => handleAnswerClick(index)}
                disabled={showFeedback}
                className={`mcl-answer-button ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary/10'
                    : showFeedback && index === question.correctAnswer
                    ? 'border-green-500 bg-green-50'
                    : 'border-border'
                } ${showFeedback && selectedAnswer === index && selectedAnswer !== question.correctAnswer ? 'mcl-shake' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  
                  {/* Feedback icons */}
                  {showFeedback && (
                    <div className="flex items-center">
                      {selectedAnswer === index && selectedAnswer !== question.correctAnswer && (
                        <X className="w-6 h-6 text-red-500 mcl-icon-bounce" />
                      )}
                      {index === question.correctAnswer && (
                        <Check className="w-6 h-6 text-green-500 mcl-icon-bounce" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Feedback message */}
        {showFeedback && (
          <div className={`mb-8 mcl-slide-up ${isCorrect ? 'mcl-feedback-correct' : 'mcl-feedback-incorrect'}`}>
            <div className="flex items-start">
              {isCorrect ? (
                <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
              ) : (
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
              )}
              <p className={`whitespace-pre-line font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {feedbackMessage}
              </p>
            </div>
          </div>
        )}

        {/* Next button */}
        {showFeedback && (
          <div className="text-center mcl-slide-up">
            <Button 
              onClick={handleNext}
              size="lg"
              className="mcl-button"
            >
              {isLastQuestion ? 'See Your Profile' : 'Next Question'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionScreen

