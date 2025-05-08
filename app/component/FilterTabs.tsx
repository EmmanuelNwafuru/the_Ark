export default function FilterTabs() {
  return (
    <div className="flex gap-4 text-base">
      {["Faith", "Audio Sermons", "Ebooks"].map((filter) => (
        <div className="bg-muted text-icon-gray py-1 px-5 rounded-full hover:bg-muted-foreground hover:text-background cursor-pointer transition">
          {filter}
        </div>
      ))}
    </div>
  );
}
