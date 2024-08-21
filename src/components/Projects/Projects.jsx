import vibescribe from "../../assets/video/vibescribe.mp4";

export default function Projects() {
  return (
    <section className="ml-4 mt-5">
      <h2 className="text-4xl font-medium mb-5">
        Projects<span className="text-violet-400 text-5xl">.</span>
      </h2>
      <div className="max-w-[90%] shadow-sm hover:-translate-y-0.5 cursor-pointer">
        <video controls className="w-full rounded-t-xl object-cover">
          <source src={vibescribe} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
