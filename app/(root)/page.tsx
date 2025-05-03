"use client";

import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import AudioCard from "../component/AudioCard";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4 bg-background rounded h-full pt-40">
        <AudioCard
          title="How God Deals with the Heart"
          subtitle="Remnant Christian Network"
          speaker="Apostle Arome Osayi"
          duration="1:29:30"
          onDownload={() => alert("Downloading...")}
        />
      </main>
    </>
  );
}
