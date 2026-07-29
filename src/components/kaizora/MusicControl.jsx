import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TRACK_URL =
  "https://media.base44.com/files/public/6a6984ae3df2ae3b9c071a1c/0c46fc5c0_relax_4820208.mp3";

export default function MusicControl() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // autoplay blocked — user can try again
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-2">
      <audio ref={audioRef} src={TRACK_URL} loop preload="auto" />

      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="glass-strong rounded-full px-4 py-2.5 flex items-center gap-3"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              aria-label="Volume"
              className="w-28 accent-[#ff3344] cursor-pointer"
            />
            <span className="text-xs text-zinc-400 tabular-nums w-7 text-right">
              {Math.round(volume * 100)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={togglePlay}
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
        aria-label={playing ? "Mute music" : "Play music"}
        className="relative w-12 h-12 rounded-full glass-strong flex items-center justify-center text-[#ff3344] hover:text-white transition-colors border border-[#ff3344]/30"
      >
        {playing ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        {playing && (
          <span className="absolute inset-0 rounded-full border border-[#ff3344]/40 animate-ping" />
        )}
      </motion.button>
    </div>
  );
}