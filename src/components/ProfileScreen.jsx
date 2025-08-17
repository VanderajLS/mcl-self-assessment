import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { profileText } from '../data/questions'
import { Brain } from 'lucide-react'

const ProfileScreen = ({ onRestart }) => {
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleStartTraining = () => {
    // Navigate to the MCL training calendar booking page
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0RshNLzSUFjX8oSUsKl8yhrKL_Ga51XbJ3G8EAyyKlAxl1VrEujpF3Zcl-CEeDtxOqRx7ksrIP?gv=true', '_blank')
  }

  const handleRestart = () => {
    onRestart()
    navigate('/')
  }

  return (
    <div className="mcl-container">
      <div className="max-w-4xl text-center mcl-fade-in">
        {/* Profile headline */}
        <div className="mb-8">
          <h2 className="mcl-subtitle mb-6">
            Your Profile:
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-10 h-10 mr-4 text-primary" />
            <h1 className="mcl-title text-3xl md:text-5xl">
              You're an idiot.
            </h1>
          </div>
          
          <p className="mcl-subtitle text-lg md:text-xl mb-8">
            And… you need to train your mind.
          </p>
        </div>

        {/* Summary paragraph */}
        <div className="mb-10">
          <p className="mcl-text whitespace-pre-line text-left max-w-3xl mx-auto">
            {profileText}
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <Button 
            onClick={handleStartTraining}
            size="lg"
            className="mcl-button w-full md:w-auto"
          >
            Schedule Now
          </Button>
          
          <div className="mt-6">
            <Button 
              onClick={handleRestart}
              variant="outline"
              size="lg"
              className="mcl-button border-2"
            >
              Take Assessment Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen

