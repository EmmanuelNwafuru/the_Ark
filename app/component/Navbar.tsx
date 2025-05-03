import { Input } from "@/components/ui/input";
import {
  ALargeSmall,
  ImageIcon,
  PictureInPicture2Icon,
  Plus,
  PlusSquare,
  Search,
  Upload,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between border-b bg-background items-center border-b-foreground/10 py-3 px-10 sticky">
      <div className="py-2 px-4 bg-muted rounded place-content-center place-items-center font-bold">
        the_ARK
      </div>
      <div className="relative w-1/4 rounded-full overflow-hidden">
        <Input
          className="w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none rounded-full placeholder:italic bg-muted pl-7 tracking-wide"
          placeholder="What would you like to listen to"
        />
        <div
          role="button"
          className="absolute right-0 top-0 h-full bg-muted hover:bg-background px-5 place-content-center place-items-center transition"
        >
          <Search className="w-5 h-auto" strokeWidth={1} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="bg-muted px-5 py-2 flex rounded">
          <Plus strokeWidth={1} className="w-5" />
          Upload Icon
        </div>
        <div className="rounded-full bg-muted w-10 h-10 place-content-center place-items-center">
          <ImageIcon strokeWidth={1} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
