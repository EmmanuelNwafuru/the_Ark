import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./component/Navbar";
import SideNav from "./component/SideNav";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "The Ark",
  description: "Download and Share Believers content globally",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700"], // Add any weight you use
  subsets: ["latin"],
  style: ["normal", "italic"], // Optional
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="bg-muted text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col justify-between pt-5 h-full overflow-y-hidden w-full">
              <div className="grid grid-cols-10 h-full gap-5 overflow-y-hidden">
                <div className="col-span-2 overflow-y-auto">
                  <SideNav />
                </div>
                <div className="col-span-8 h-full overflow-hidden">
                  {children}
                </div>
              </div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-5 justify-self-end bg-amber-200">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>

            {/* </div> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
