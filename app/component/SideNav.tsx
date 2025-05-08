"use client";

import {
  Home,
  AudioLines,
  Book,
  MessageCircle,
  Clock,
  Download,
  Heart,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import { FaComment, FaHeart, FaHistory, FaWaveSquare } from "react-icons/fa";
import {
  FaBook,
  FaDownload,
  FaFileWaveform,
  FaMessage,
  FaRegMessage,
} from "react-icons/fa6";
import {} from "react-icons/fc";
import { MdAudiotrack, MdHome, MdGraphicEq } from "react-icons/md";

const navItems = [
  { label: "Home", icon: <MdHome size={18} />, href: "/" },
  {
    label: "Audio Sermons",
    icon: <AudioLines strokeWidth={2.7} size={14} />,
    href: "/sermons",
  },
  { label: "E-Books", icon: <FaBook size={14} />, href: "/ebooks" },
  {
    label: "Testimonies",
    icon: <FaComment size={14} />,
    href: "/testimonies",
  },
];

const libraryItems = [
  { label: "History", icon: <FaHistory size={14} />, href: "/history" },
  { label: "Downloads", icon: <FaDownload size={14} />, href: "/downloads" },
  { label: "Favorites", icon: <FaHeart size={14} />, href: "/favorites" },
];

export default function SideNav() {
  return (
    <aside className="w-full h-full py-4 px-9 text-icon-gray">
      <nav className="space-y-6 text-base tracking-wide">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-muted-foreground/10 transition"
              >
                <span className="w-7">{item.icon}</span>
                <span className="text-foreground text-base">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-200 pt-5">
          <h4 className="text-xs text-muted-foreground px-3 mb-2">
            Your Library
          </h4>
          <ul className="space-y-2">
            {libraryItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 transition hover:bg-muted-foreground/10"
                >
                  <span className="w-7">{item.icon}</span>
                  <span className="text-foreground">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
