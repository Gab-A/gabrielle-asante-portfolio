import SkillLogo from "../SkillLogo/SkillLogo";

export default function SkillCategory({ title, skills }) {
  return (
    <div className="lg:mb-20">
      <h3 className="uppercase font-semibold tracking-widest my-6 text-left sm:text-xl md:my-10 lg:text-2xl lg:mb-14">
        {title}
      </h3>
      <div className="mb-10 -ml-1.5 mr-4 md:mb-12 grid grid-cols-4 md:grid-cols-4 gap-y-8 gap-x-10 sm:justify-items-center lg:justify-items-start lg:gap-y-14">
        {skills.map((skill, index) => {
          return <SkillLogo skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
}
