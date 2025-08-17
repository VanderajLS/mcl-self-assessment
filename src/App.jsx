import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import LandingScreen from './components/LandingScreen'
import IntroScreen from './components/IntroScreen'
import QuestionScreen from './components/QuestionScreen'
import ProfileScreen from './components/ProfileScreen'
import ScrollToTop from './components/ScrollToTop'
import { questionsData } from './data/questions'
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    
    // Store the answer
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = answerIndex
    setUserAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    setShowFeedback(false)
    setSelectedAnswer(null)
    setCurrentQuestionIndex(prev => prev + 1)
  }

  const resetAssessment = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowFeedback(false)
    setSelectedAnswer(null)
  }

  const isLastQuestion = currentQuestionIndex >= questionsData.length - 1
  const currentQuestion = questionsData[currentQuestionIndex]

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/landing" element={<LandingScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route 
            path="/question" 
            element={
              <QuestionScreen 
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questionsData.length}
                selectedAnswer={selectedAnswer}
                showFeedback={showFeedback}
                isLastQuestion={isLastQuestion}
                onAnswerSelect={handleAnswerSelect}
                onNextQuestion={handleNextQuestion}
              />
            } 
          />
          <Route 
            path="/profile" 
            element={<ProfileScreen onRestart={resetAssessment} />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

