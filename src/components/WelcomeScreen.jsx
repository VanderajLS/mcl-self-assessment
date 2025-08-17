import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

const WelcomeScreen = () => {
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [hasFinished, setHasFinished] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.currentTime + 15,
        audioRef.current.duration
      )
    }
  }

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        audioRef.current.currentTime - 15,
        0
      )
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setHasFinished(true)
  }

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickX = e.nativeEvent.offsetX
      const width = progressBar.offsetWidth
      const newTime = (clickX / width) * duration
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleStartQuestionnaire = () => {
    navigate('/intro')
  }

  return (
    <div className="mcl-container">
      <div className="max-w-4xl text-center mcl-fade-in">
        {/* Welcome heading */}
        <div className="mb-12">
          <h1 className="mcl-title text-4xl md:text-6xl mb-6">
            Welcome to the
          </h1>
          <h1 className="mcl-title text-4xl md:text-6xl text-primary">
            Meditation Combat League
          </h1>
        </div>

        {/* Audio player */}
        <div className="bg-card rounded-lg p-8 mb-8 max-w-2xl mx-auto">
          <audio
            ref={audioRef}
            src="./WelcometotheMCL.mp3"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            preload="metadata"
          />

          {/* Progress bar */}
          <div className="mb-6">
            <div 
              className="w-full h-2 bg-muted rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-primary rounded-full transition-all duration-100"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Audio controls */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Button
              onClick={skipBackward}
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 p-0"
            >
              <SkipBack className="w-4 h-4" />
            </Button>

            <Button
              onClick={togglePlayPause}
              size="lg"
              className="rounded-full w-16 h-16 p-0"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>

            <Button
              onClick={skipForward}
              variant="outline"
              size="sm"
              className="rounded-full w-10 h-10 p-0"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>

          {/* Volume control */}
          <div className="flex items-center justify-center space-x-3">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Questionnaire button - shows after audio finishes */}
        {hasFinished && (
          <div className="mcl-fade-in">
            <Button 
              onClick={handleStartQuestionnaire}
              size="lg"
              className="mcl-button"
            >
              Take this 1 min questionnaire
            </Button>
          </div>
        )}

        {/* Skip option */}
        {!hasFinished && (
          <div className="mt-6">
            <Button 
              onClick={handleStartQuestionnaire}
              variant="outline"
              size="sm"
              className="text-muted-foreground"
            >
              Skip to questionnaire
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WelcomeScreen

