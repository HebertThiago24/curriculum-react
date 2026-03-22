function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Experiência</h2>

      <div className="flex flex-col gap-6">
        {/* Projeto 1 */}
        <div>
          <h3 className="font-semibold">CRUD com JavaScript Puro</h3>
          <p className="text-gray-600 text-sm">
            Desenvolvimento de aplicação CRUD utilizando JavaScript puro,
            manipulando DOM, eventos e armazenamento de dados.
          </p>
        </div>

        {/* Projeto 2 */}
        <div>
          <h3 className="font-semibold">CRUD com React</h3>
          <p className="text-gray-600 text-sm">
            Aplicação com React utilizando componentes reutilizáveis, estados
            (useState) e organização de código em estrutura modular.
          </p>
        </div>

        {/* Projeto 3 */}
        <div>
          <h3 className="font-semibold">CRUD com React + Redux + Tailwind</h3>
          <p className="text-gray-600 text-sm">
            Projeto com gerenciamento de estado global utilizando Redux,
            aplicação de padrões como Flux e estilização com Tailwind CSS e
            Flexbox.
          </p>
        </div>

        {/* Projeto 4 */}
        <div>
          <h3 className="font-semibold">Integração com API (IBGE)</h3>
          <p className="text-gray-600 text-sm">
            Consumo de API externa utilizando React, com requisições HTTP,
            manipulação de dados e renderização dinâmica de informações.
          </p>
        </div>

        {/* Projeto 5 */}
        <div>
          <h3 className="font-semibold">Projeto Lista de Tarefas</h3>
          <p className="text-gray-600 text-sm">
            Aplicação com manipulação de estados, eventos e criação de interface
            interativa para gerenciamento de tarefas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
