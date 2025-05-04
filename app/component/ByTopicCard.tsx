// components/ByTopicCard.tsx
import Image from "next/image";

interface ByTopicCardProps {
  topic: string;
  colorHex: string;
}

export default function ByTopicCard({ topic, colorHex }: ByTopicCardProps) {
  return (
    <div className="w-[277px]">
      <div
        className={`relative w-full h-[154px] rounded-3xl overflow-hidden mb-2 aspect-[277/154] bg-[${colorHex}]`}
      >
        {/* <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-xl object-cover"
        /> */}
        <h2 className="absolute top-5 left-5 font-semibold text-white">
          {topic}
        </h2>
      </div>
    </div>
  );
}
