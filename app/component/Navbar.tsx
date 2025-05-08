import { Search } from "lucide-react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { MdSearch } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-14 py-3 bg-background shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-blue-600 text-xl font-bold">+</div>
        <span className="font-semibold text-lg">the_Ark</span>
      </div>

      {/* Center: Search */}
      <div className="flex-1 mx-6 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search sermons, ebooks, testimonies..."
            className="w-full pl-4 pr-10 py-2 rounded-full bg-muted-foreground/10 text-sm placeholder:italic focus:outline-none placeholder:text-muted-foreground/50 tracking-wider"
          />
          <FaSearch
            strokeWidth={1}
            className="absolute right-3 w-4 h-auto top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 bg-icon-blue hover:scale-[1.03] text-white px-4 py-2 rounded-md text-base transition">
          <FaUpload className="text-white" />
          <span>Upload</span>
        </button>
        <button className="flex items-center space-x-1 text-base text-muted-foreground hover:underline transition">
          <FaUser />
          <span>Sign In</span>
        </button>
      </div>
    </nav>
  );
}
