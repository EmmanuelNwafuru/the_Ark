import Link from "next/link";
import SideNavBtn from "./SideNavBtn";

const SideNav = () => {
  return (
    <div className="lg h-full bg-background rounded-r flex flex-col py-5 px-7 gap-3">
      {[
        { label: "Audio Sermons", redirect: "/audio-sermons" },
        { label: "Ebooks", redirect: "#" },
        { label: "Testimonies", redirect: "#" },
        {
          label: "Bless Lives",
          redirect: "#",
          children: [
            { label: "Share Sermons", redirect: "/bless-lives/share-sermons" },
            { label: "Share Ebooks", redirect: "#" },
            { label: "Share Testimonies", redirect: "#" },
          ],
        },
      ].map((nav, i) => (
        <SideNavBtn key={i} nav={nav} />
      ))}
      <div className="w-full flex justify-between px-3 py-2">
        <span>Category</span>
        <select
          name="Preacher"
          id=""
          className="sm px-1 hover:cursor-pointer bg-muted rounded focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-within:bg-muted focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 focus-within:shadow-none"
        >
          <option value="" className="bg-muted">
            Preacher
          </option>
          <option value="">Topic</option>
          <option value="">Series</option>
          <option value="">Church</option>
        </select>
      </div>
    </div>
  );
};

export default SideNav;
