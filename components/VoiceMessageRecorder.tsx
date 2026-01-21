import { useState, useRef, useEffect } from 'react' // Ajout de useRef et useEffect
import { Mic, Square, Play, Send, RefreshCw } from 'lucide-react'

export function VoiceMessageRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  
  // Utilisation de useRef au lieu de window.recordingInterval
  const intervalRef = useRef<number | null>(null)

  const toggleRecording = () => {
    if (!isRecording) {
      // Démarrage de l'enregistrement
      setIsRecording(true)
      setRecordingTime(0)
      
      const interval = window.setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
      
      intervalRef.current = interval
    } else {
      // Arrêt de l'enregistrement
      setIsRecording(false)
      
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      
      setAudioBlob(new Blob()) // Simulation du fichier audio
    }
  }

  // Nettoyage automatique de l'intervalle si on quitte la page
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Mic className="h-5 w-5 text-[#fbbf24]" />
        Enregistreur Vocal
      </h3>

      <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center gap-6 mb-6">
        {isRecording ? (
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
              <Mic className="h-8 w-8" />
            </div>
          </div>
        ) : audioBlob ? (
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
            <Play className="h-8 w-8 ml-1" />
          </div>
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-inner">
            <Mic className="h-8 w-8" />
          </div>
        )}

        <div className="text-2xl font-mono font-bold text-gray-700">
          {formatTime(recordingTime)}
        </div>

        <p className="text-sm text-gray-500 text-center max-w-xs">
          {isRecording
            ? 'Enregistrement en cours... Parlez clairement.'
            : audioBlob
              ? "Message enregistré. Prêt à l'envoi."
              : "Appuyez sur le bouton pour commencer l'enregistrement (max 2 min)."}
        </p>
      </div>

      <div className="flex gap-3">
        {!isRecording && !audioBlob && (
          <button
            onClick={toggleRecording}
            className="flex-1 py-3 bg-[#0f3d6e] text-white rounded-lg font-medium hover:bg-[#1e5a9e] transition-colors flex items-center justify-center gap-2"
          >
            <Mic className="h-4 w-4" /> Commencer
          </button>
        )}

        {isRecording && (
          <button
            onClick={toggleRecording}
            className="flex-1 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <Square className="h-4 w-4 fill-current" /> Arrêter
          </button>
        )}

        {audioBlob && (
          <>
            <button
              onClick={() => {
                setAudioBlob(null)
                setRecordingTime(0)
              }}
              className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button className="flex-1 py-3 bg-[#fbbf24] text-white rounded-lg font-medium hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              <Send className="h-4 w-4" /> Envoyer (Twilio)
            </button>
          </>
        )}
      </div>
    </div>
  )
}