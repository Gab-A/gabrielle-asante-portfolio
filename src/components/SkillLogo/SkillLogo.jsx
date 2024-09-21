export default function SkillLogo({ skill }) {
  return (
    <div className=" flex justify-center items-center bg-violet-50 rounded-full p-4 w-20 h-20 shadow-md animate-customBounce sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-8 transition-transform duration-500 ease-in-out transform hover:rotate-[360deg] md:w-12 lg:w-16"
      />
    </div>
  );
}
