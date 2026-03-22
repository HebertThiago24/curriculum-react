import React from "react";
import minhaFoto from "../assets/minha.foto.jpeg";

function Header() {
  return (
    <header className="flex flex-col items-center bg-gray-700 p-6 rounded-xl shadow-md mb-8">
      <img
        src={minhaFoto}
        alt="Hébert Thiago"
        className="w-36 h-36 rounded-full border-2 border-white object-cover object-[30%_20%] mb-4"
      />

      <h1 className="text-2xl font-bold text-white text-center">
        Hébert Thiago
      </h1>
      <p className="text-gray-300 mt-1 text-center">
        Desenvolvedor Web em formação
      </p>

      <div className="mt-4 text-center space-y-1">
        <p className="text-gray-300 text-sm">
          📞{" "}
          <a href="tel:+5531984551908" className="underline hover:text-white">
            31 98455-1908
          </a>
        </p>

        <p className="text-gray-300 text-sm">
          ✉️{" "}
          <a
            href="mailto:hebertthiago2@email.com"
            className="underline hover:text-white"
          >
            hebertthiago2@email.com
          </a>
        </p>

        <p className="text-gray-300 text-sm">
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/hebert-thiago-b91a663a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            linkedin
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
