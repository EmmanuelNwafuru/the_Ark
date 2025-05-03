"use client";

import React from "react";
import { Download, Play, PlayCircle } from "lucide-react"; // optional icon lib

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
  return (
    <div className="flex items-center gap-5 max-w-3xl">
      {/* Audio Icon */}
      <div className="w-32 h-32 bg-muted rounded-3xl flex items-center justify-center">
        <Play />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">
          {speaker} <span className="mx-2">·</span> {duration}
        </p>

        {/* Download Button */}
        <div
          role="button"
          onClick={onDownload}
          className="px-5 py-1 mt-2 w-fit bg-muted-foreground text-muted rounded-md font-semibold cursor-pointer hover:scale-105 transition"
        >
          Download
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
