function Education() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">Educação</h2>

      <div className="flex flex-col gap-4">
        {/* Curso principal */}
        <div>
          <h3 className="font-semibold">
            Curso de Desenvolvimento Web com React
          </h3>
          <p className="text-gray-700 text-sm">
            Formação focada em criação de aplicações modernas utilizando React,
            JavaScript, componentes reutilizáveis e boas práticas de
            desenvolvimento.
          </p>
        </div>

        {/* Certificado JS */}
        <div>
          <h3 className="font-semibold">Certificado em JavaScript Básico</h3>
          <p className="text-gray-700 text-sm">
            Fundamentos da linguagem JavaScript, incluindo variáveis, funções,
            estruturas condicionais, loops e manipulação de eventos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
