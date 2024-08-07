import SkillLogo from "../SkillLogo/SkillLogo";

export default function SkillCategory({ title, skills }) {
  return (
    <>
      <h3 className="uppercase font-semibold tracking-wide ml-4 mb-6 mt-6">
        {title}
      </h3>
      <div className="flex gap-2.5 flex-wrap w-full justify-center">
        {skills.map((skill, index) => {
          return <SkillLogo skill={skill} key={index} />;
        })}
      </div>
    </>
  );
}
