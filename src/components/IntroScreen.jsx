import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { introText } from '../data/questions'

const IntroScreen = () => {
  const navigate = useNavigate()

  const handleLetsGo = () => {
    navigate('/question')
  }

  return (
    <div className="mcl-container">
      <div className="max-w-3xl text-center mcl-fade-in">
        <div className="mb-8">
          <p className="mcl-text whitespace-pre-line">
            {introText}
          </p>
        </div>
        
        <Button 
          onClick={handleLetsGo}
          size="lg"
          className="mcl-button"
        >
          Let's Go
        </Button>
      </div>
    </div>
  )
}

export default IntroScreen

