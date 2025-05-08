"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
};

export default function EBookCard({ title, author, imageUrl }: Props) {
  return (
    <div className="relative w-80 aspect-[362/304] bg-background rounded-xl shadow-sm overflow-hidden text-gray-800 dark:text-gray-200">
      {/* PDF Badge */}
      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-md z-10">
        PDF
      </div>

      {/* Book Image */}
      <div className="overflow-hidden flex justify-center items-center aspect-[362/192]">
        <Image
          src={imageUrl}
          alt={title}
          width={120}
          height={180}
          className="object-cover w-full h-full hover:scale-105 transition cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center p-4">
        {/* Text Content */}
        <div className="">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">By {author}</p>
        </div>

        {/* Download Icon */}
        <div className="text-icon-blue hover:text-blue-800 cursor-pointer">
          <FaDownload size={14} />
        </div>
      </div>
    </div>
  );
}
