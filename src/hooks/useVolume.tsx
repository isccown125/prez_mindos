import { RefObject, useEffect, useState } from "react";

const useVolume = (
  audioRef: RefObject<HTMLAudioElement>,
  audioPath: string
) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>("");
  useEffect(() => {
    if (audioRef.current === null) return;
    audioRef.current.src = audioPath;
  }, [audioPath]);

  const play = () => {
    if (audioRef.current === null) return;
    setIsPlaying(() => true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const stop = () => {
    if (audioRef.current === null) return;
    setIsPlaying(() => false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const togglePlay = () => {
    isPlaying ? stop() : play();
  };

  return { currentPath, togglePlay };
};

export default useVolume;
