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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const togglePlayPause = () => {
    if (!audioRef.current) return
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const skipForward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 15,
      audioRef.current.duration || 0
    )
  }

  const skipBackward = () => {
    if (!audioRef.current) return
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration || 0)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setHasFinished(true)
  }

  const handleProgressClick = (e) => {
    if (!audioRef.current || duration === 0) return
    const progressBar = e.currentTarget
    const clickX = e.nativeEvent.offsetX
    const width = progressBar.offsetWidth
    const newTime = (clickX / width) * duration
    audioRef.current.currentTime = newTime
  }

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value)
    setVolume(newVol)
    if (audioRef.current) audioRef.current.volume = newVol
  }

  const formatTime = (t) => {
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

  const goToSurvey = () => navigate('/intro')
  const bookFirstSession = () =>
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0RshNLzSUFjX8oSUsKl8yhrKL_Ga51XbJ3G8EAyyKlAxl1VrEujpF3Zcl-CEeDtxOqRx7ksrIP?gv=true',
      '_blank'
    )

  return (
    <div
      className="relative min-h-screen"
      style={{
        // BASE_URL ensures correct path on GitHub Pages project sites
        backgroundImage: `url(${import.meta.env.BASE_URL}landing-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* dark overlay with inline fallback (works even if Tailwind color classes don't load) */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mcl-container text-white">
        <div className="max-w-4xl text-center mcl-fade-in">
          {/* Headline */}
          <div className="mb-10">
            <h1 className="mcl-title text-white">What’s Really Holding You Back?</h1>
            <p className="mcl-subtitle text-white/90">
              First, listen to this audio. Then take the survey.
            </p>
          </div>

          {/* 3 steps */}
          <ol className="grid gap-4 md:grid-cols-3 text-left mb-10">
            <li className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/15">
              <p className="font-bold mb-1">1. Listen to the audio</p>
              <p className="text-white/80 text-sm">It takes a couple of minutes.</p>
            </li>
            <li className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/15">
              <p className="font-bold mb-1">2. Take the survey</p>
              <p className="text-white/80 text-sm">Short, just a minute.</p>
            </li>
            <li className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/15">
              <p className="font-bold mb-1">3. Schedule your first meditation experience</p>
              <p className="text-white/80 text-sm">Pick a time that works for you.</p>
            </li>
          </ol>

          {/* Audio player card */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8 max-w-2xl mx-auto border border-white/15">
            <audio
              ref={audioRef}
              // use BASE_URL here too for robustness on project pages
              src={`${import.meta.env.BASE_URL}WelcometotheMCL.mp3`}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              preload="metadata"
            />

            {/* Progress */}
            <div className="mb-6">
              <div
                className="w-full h-2 bg-white/30 rounded-full cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-white/80 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button
                onClick={skipBackward}
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0 border-white/40 text-white/90"
              >
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button
                onClick={togglePlayPause}
                size="lg"
                className="rounded-full w-16 h-16 p-0 bg-white text-black hover:bg-white/90"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </Button>
              <Button
                onClick={skipForward}
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0 border-white/40 text-white/90"
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            {/* Volume */}
            <div className="flex items-center justify-center space-x-3">
              <Volume2 className="w-4 h-4 text-white/80" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* After audio finishes: show CTAs */}
          {hasFinished && (
            <div className="mcl-fade-in space-y-4">
              <Button onClick={goToSurvey} size="lg" className="mcl-button bg-white text-black hover:bg-white/90">
                Take the 1-minute survey
              </Button>
              <div>
                <Button
                  onClick={bookFirstSession}
                  variant="outline"
                  size="lg"
                  className="mcl-button border-2 border-white text-white"
                >
                  Schedule your first meditation experience
                </Button>
              </div>
            </div>
          )}
          {/* IMPORTANT: user must finish audio; no skip button */}
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
