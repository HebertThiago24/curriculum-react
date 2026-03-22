function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

  return (
    <section>
      <h2 className="text-xl font-bold mb-2 text-center">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
