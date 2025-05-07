import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ShareSermonPage = () => {
  return (
    <main className="flex-1 flex flex-col gap-6 px-10 bg-background rounded h-full py-10 overflow-y-auto">
      <section className="grid w-full grid-cols-2 gap-10">
        <div>
          <Label>Add Sermon</Label>
          <Input type="file" className="w-[70%] h-[70%]" />
        </div>
        <div>
          <Label>Add Thumbnail</Label>
          <Input type="file" />
        </div>
        <div>
          <Label>Topic</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Preacher</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Topic Category</Label>
          <Input type="text" />
        </div>
        <div>
          <Label>Church</Label>
          <Input type="text" />
        </div>
      </section>
      {/* <section>By Preacher</section>
      <section>Random Sermons</section>
      <section>By Topic</section>
      <section>Random Sermons</section>
      <section>By Church</section>
      <section>Random Sermons</section>
      <section>By Series</section>
      <section>Random Sermons</section> */}
    </main>
  );
};

export default ShareSermonPage;
