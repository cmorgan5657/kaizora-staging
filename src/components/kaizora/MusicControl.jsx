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
        // autoplay blocked
      }
    }
  };

  return (
    <div
      className="relative flex items-center gap-2"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <audio ref={audioRef} src={TRACK_URL} loop preload="auto" />

      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, width: 0, scale: 0.9 }}
            animate={{ opacity: 1, width: "auto", scale: 1 }}
            exit={{ opacity: 0, width: 0, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="glass-strong rounded-full px-3 py-2 flex items-center gap-2 overflow-hidden"
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              aria-label="Volume"
              className="w-24 accent-[#ff3344] cursor-pointer"
            />
            <span className="text-xs text-zinc-400 tabular-nums w-7 text-right">
              {Math.round(volume * 100)}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={togglePlay}
        aria-label={playing ? "Mute music" : "Play music"}
        className="glass rounded-full w-10 h-10 flex items-center justify-center text-[#ff3344] hover:text-white transition shrink-0"
      >
        {playing ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </button>
    </div>
  );
}