"use client";
// This component is a client component, so it can use hooks like useState and useEffect.

import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Download,
  HeadphoneOff,
  HeadphonesIcon,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import {
  FaHeadphones,
  FaHeadphonesAlt,
  FaHeadset,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

interface AudioPreviewPlayerProps {
  title: string;
  speaker: string;
  plays: string;
  time: string;
  audioSrc: string;
  backgroundImage: string;
}

export default function AudioPreviewPlayer({
  title,
  speaker,
  plays,
  time,
  audioSrc,
  backgroundImage,
}: AudioPreviewPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div
      className="relative w-80 aspect-[362/304] flex flex-col justify-between rounded-xl overflow-hidden text-white bg-background border py-4"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <audio ref={audioRef} src={audioSrc} />

      <div className="px-4 flex flex-col h-full text-muted-foreground">
        <div className="font-normal text-sm flex justify-between items-center w-full mb-2 text-icon-blue">
          <Headphones className="w-6 h-auto" />
          <span className="text-muted-foreground">{time}</span>
        </div>
        <div className="flex items-center mb-2 text-icon-blue">
          <div className="font-semibold text-base text-foreground">{title}</div>
        </div>
        <div className="flex justify-between text-sm">
          {speaker}
          <span className="text-icon-blue text-xs">
            <FaDownload className="w-4 h-auto cursor-pointer" />
          </span>
        </div>
        {/* <div className="text-xs">{plays} plays</div> */}
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 appearance-none bg-gray-300 rounded-full cursor-pointer 
             focus:outline-none focus:ring-0 
             [&::-webkit-slider-thumb]:appearance-none 
             [&::-webkit-slider-thumb]:h-3 
             [&::-webkit-slider-thumb]:w-3 
             [&::-webkit-slider-thumb]:rounded-full 
             [&::-webkit-slider-thumb]:bg-blue-500 
             [&::-webkit-slider-thumb]:cursor-pointer 
             [&::-moz-range-thumb]:h-3 
             [&::-moz-range-thumb]:w-3 
             [&::-moz-range-thumb]:rounded-full 
             [&::-moz-range-thumb]:bg-blue-500"
          />
          <button
            onClick={togglePlayback}
            className="w-8 h-8 flex items-center justify-center text-icon-blue"
          >
            {isPlaying ? (
              <FaPause className="w-4 h-auto cursor-pointer" />
            ) : (
              <FaPlay className="w-4 h-auto cursor-pointer" />
            )}
          </button>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
