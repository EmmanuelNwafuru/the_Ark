"use client";

import AudioCard from "../component/AudioCard";
import ByPreacherCard from "../component/ByPreacherCard";
import ByTopicCard from "../component/ByTopicCard";
import ByChurchCard from "../component/ByChurchCard";
import BySeriesCard from "../component/BySeriesCard";
import AudioPlayProgress from "../component/AudioPlayProgress";
import AudioPreviewPlayer from "../component/AudioPreviewPlayer";
import EBookCard from "../component/EbookCard";
import TestimonialCard from "../component/TestimonyCard";
import FilterTabs from "../component/FilterTabs";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-6 px-10 bg-background rounded h-full py-10 overflow-y-auto">
      <FilterTabs />
      <div className="grid grid-cols-3 gap-4">
        <div className="w-fit h-fit">
          <TestimonialCard
            name="Mary Anderson"
            timeAgo="2 days ago"
            content="My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health. My healing testimony: How God restored my health"
            reads={354}
            likes={90}
            avatarUrl="/audioCard/emma.jpg" // Replace with your actual image path
          />
        </div>
        <div className="h-fit w-fit flex items-center justify-center">
          <EBookCard
            title="Understanding Grace"
            author="Dr. Sarah Johnson"
            imageUrl="/audioCard/emma.jpg" // replace with your actual path
          />
        </div>
        <div className="h-fit w-fit flex items-center justify-center">
          <AudioPreviewPlayer
            title="Walking in Faith"
            speaker="Rev. James Miller"
            plays="2.5K"
            time="12:45"
            audioSrc="/audio/sample.mp3"
            backgroundImage="/audioCard/emma.jpg"
          />
        </div>
        <div className="h-fit w-fit flex items-center justify-center">
          <EBookCard
            title="Understanding Grace"
            author="Dr. Sarah Johnson"
            imageUrl="/audioCard/emma.jpg" // replace with your actual path
          />
        </div>
      </div>
    </main>
  );
}
