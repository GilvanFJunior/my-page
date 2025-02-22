import React from 'react';
import img_experience from '../../assets/experience-theme.jpg';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font"
    >
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full"></div>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          <div className="md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0"></div>
          <img
            src={img_experience}
            className="object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10"
            alt="Experience"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center "
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 ">
            EXPERIENCE
          </h1>
          <h2 className="title-font font-bold text-white sm:text-2xl ">
            2015-2024: Marinha do Brasil
          </h2>
          <p className="mb-8 text-white leading-relaxed ">
            Ao longo do meu percurso profissional, desempenhei atividades
            administrativas ligadas à área de carreira de militares e,
            especialmente, ao manuseio de documentos sigilosos. Essa experiência
            aprimorou não apenas minhas habilidades de comunicação e raciocínio
            lógico, mas também reforçou minha compreensão da importância da
            confidencialidade e do sigilo. Trabalhar com documentos
            confidenciais me exigiu um alto nível de atenção aos detalhes,
            responsabilidade e precisão, fortalecendo ainda mais minha
            capacidade de organização e zelo na proteção de informações
            sensíveis. Essa vivência consolidou em mim um compromisso constante
            com a segurança e integridade dos dados.!
          </p>
        </div>
      </div>
    </section>
  );
}
