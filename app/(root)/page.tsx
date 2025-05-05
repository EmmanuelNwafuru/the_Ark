"use client";

import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import AudioCard from "../component/AudioCard";
import ByPreacherCard from "../component/ByPreacherCard";
import ByTopicCard from "../component/ByTopicCard";
import ByChurchCard from "../component/ByChurchCard";
import BySeriesCard from "../component/BySeriesCard";
import AudioPlayProgress from "../component/AudioPlayProgress";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-6 px-10 bg-background rounded h-full py-10 overflow-y-auto">
      <AudioPlayProgress />
      <AudioCard
        title="How God Deals with the Heart"
        subtitle="Remnant Christian Network"
        speaker="Apostle Arome Osayi"
        duration="1:29:30"
        onDownload={() => alert("Downloading...")}
      />
      <ByPreacherCard
        name="Apostle Arome Osayi"
        church="Remnant Christian Network"
        imageUrl="/audioCard/emma.jpg"
      />
      <ByTopicCard topic="Faith" colorHex="#5D478B" />
      <ByChurchCard
        churchName="Wordfeast Gospel Network"
        imageUrl="/audioCard/emma.jpg"
      />
      <BySeriesCard
        name="New Life in Christ Series"
        preacher="Apostle Chidi Amanoh"
        imageUrl="/audioCard/emma.jpg"
        numSermons={4}
      />
    </main>
  );
}
