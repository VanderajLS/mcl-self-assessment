import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const LandingScreen = () => {
  const navigate = useNavigate()

  const handleBeginAssessment = () => {
    navigate('/intro')
  }

  return (
    <div className="mcl-container">
      <div className="text-center max-w-4xl mcl-fade-in">
        <h1 className="mcl-title">
          What's Really Holding You Back?
        </h1>
        
        <Button 
          onClick={handleBeginAssessment}
          size="lg"
          className="mcl-button"
        >
          Begin Assessment
        </Button>
      </div>
    </div>
  )
}

export default LandingScreen

