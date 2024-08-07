export default function SkillLogo({ skill }) {
  return (
    <div className=" flex justify-center items-center bg-violet-50 rounded-full p-4 w-20 h-20 shadow-md">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-8 transition-transform duration-500 ease-in-out transform hover:rotate-[360deg]"
      />
    </div>
  );
}
