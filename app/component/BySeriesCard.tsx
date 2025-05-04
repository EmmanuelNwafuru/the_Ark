// components/BySeriesCard.tsx
import Image from "next/image";

interface BySeriesCardProps {
  name: string;
  preacher: string;
  numSermons: number;
  imageUrl: string;
}

export default function BySeriesCard({
  name,
  preacher,
  numSermons,
  imageUrl,
}: BySeriesCardProps) {
  return (
    <div className="w-[277px]">
      <div className="relative w-full h-[154px] rounded-3xl overflow-hidden mb-2 aspect-[277/154]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <h2 className="base font-bold">{name}</h2>
      <p className="sm text-muted-foreground">
        {preacher}&nbsp;
        <span>. {numSermons} Sermons</span>
      </p>
    </div>
  );
}
