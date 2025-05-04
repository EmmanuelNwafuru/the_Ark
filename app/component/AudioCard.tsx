"use client";

import React, { useState } from "react";
import { Download, Pause, PauseCircle, Play, PlayCircle } from "lucide-react"; // optional icon lib
import Image from "next/image";

interface AudioCardProps {
  title: string;
  subtitle: string;
  speaker: string;
  duration: string;
  onDownload?: () => void;
}

const AudioCard: React.FC<AudioCardProps> = ({
  title,
  subtitle,
  speaker,
  duration,
  onDownload,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex items-center gap-5 max-w-96">
      {/* Audio Icon */}
      <div
        role="button"
        className="relative w-24 bg-muted rounded-3xl aspect-square flex items-center justify-center overflow-hidden whitespace-nowrap flex-shrink-0 group"
      >
        <Image src="/audioCard/emma.jpg" alt="Music cover photo" fill />
        <div
          onClick={() => setIsPlaying((prev) => !prev)}
          className="absolute w-full h-full top-0 right-0 place-content-center place-items-center bg-black/20 text-white"
        >
          {isPlaying ? (
            <Pause
              strokeWidth={1}
              className="w-10 h-auto group-hover:scale-105 transition"
            />
          ) : (
            <Play
              strokeWidth={1}
              className="w-10 h-auto group-hover:scale-105 transition"
            />
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 w-full">
        <h3 className="base font-semibold line-clamp-2 overflow-ellipsis leading-tight w-full">
          {title}
        </h3>
        <p className="sm text-muted-foreground flex items-center">
          <span className="line-clamp-1">{speaker}</span>
          <span className="whitespace-nowrap">&nbsp;·&nbsp;{duration}</span>
        </p>

        {/* Download Button */}
        <div
          role="button"
          onClick={onDownload}
          className="sm px-5 py-1 mt-1 w-fit bg-muted-foreground text-muted rounded-md font-semibold cursor-pointer hover:scale-105 transition"
        >
          Download
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
