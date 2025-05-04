// components/ByChurchCard.tsx
import Image from "next/image";

interface ByChurchCardProps {
  churchName: string;
  imageUrl: string;
}

export default function ByChurchCard({
  churchName,
  imageUrl,
}: ByChurchCardProps) {
  return (
    <div className="w-[277px]">
      <div className="relative w-full h-[154px] rounded-3xl overflow-hidden mb-2 aspect-[277/154]">
        <Image
          src={imageUrl}
          alt={churchName}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <p className="base font-semibold">{churchName}</p>
    </div>
  );
}
