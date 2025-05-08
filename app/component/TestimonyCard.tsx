"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  content: string;
  reads: number;
  likes: number;
  avatarUrl: string;
}

export default function TestimonialCard({
  name,
  timeAgo,
  content,
  reads,
  likes,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <div className="bg-background w-80 aspect-[362/304] rounded-xl shadow-md p-4 max-w-sm dark:border-[0.5px]">
      <div className="flex items-center mb-4">
        <Image
          src={avatarUrl}
          alt={`${name}'s profile picture`}
          width={40}
          height={40}
          className="rounded-full w-10 h-auto"
        />
        <div className="ml-3">
          <p className="font-semibold text-base">{name}</p>
          <p className="text-sm text-muted-foreground">Shared {timeAgo}</p>
        </div>
      </div>

      <p className="text-base line-clamp-[6] tracking-wide leading-6 text-gray-800 dark:text-gray-200 mb-6">
        {content}
      </p>

      <div className="flex items-center justify-between text-sm text-icon-gray">
        <p className="text-muted-foreground">{reads} reads</p>
        <span className="flex items-center gap-1 text-red-500">
          <FaHeart className="w-4 h-auto cursor-pointer" />
        </span>
      </div>
    </div>
  );
}
