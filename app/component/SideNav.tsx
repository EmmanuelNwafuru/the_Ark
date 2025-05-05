import Link from "next/link";

const SideNav = () => {
  return (
    <div className="lg h-full bg-background rounded-r flex flex-col py-5 px-7 gap-3">
      {[
        { label: "Sermons", redirect: "#" },
        { label: "Ebooks", redirect: "#" },
        { label: "Testimonies", redirect: "#" },
      ].map((nav, i) => (
        <Link
          key={i}
          href={nav.redirect}
          className="hover:bg-muted px-3 py-2 rounded"
        >
          {nav.label}
        </Link>
      ))}
      <div className="w-full flex justify-between">
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
      {[{ label: "Bless Lives", redirect: "#" }].map((nav, i) => (
        <Link key={i} href={nav.redirect}>
          {nav.label}
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
