import React from 'react';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.png';
import webdesign from '../../assets/web-design.png';
import react from '../../assets/react.png';
import java from '../../assets/java-icon.png';
import figma from '../../assets/figma-icon.png';
import tailwindcss from '../../assets/tailwindcss-icon.png';
import git from '../../assets/git-icon.png';
import kanbam from '../../assets/kanbam-icon.png';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400"
        >
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white "
          >
            SKILLS
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base"
          >
            Estou expandindo minhas habilidades para me tornar um profissional
            T-shaped, aprofundando meus conhecimentos em linguagens de Back-End.
            Essa busca por um perfil mais completo me permite ter uma visão
            holística dos projetos e contribuir de forma mais estratégica para o
            desenvolvimento de soluções completas. A experiência na Marinha,
            marcada pela disciplina e o comprometimento, me proporcionou uma
            base sólida para enfrentar desafios complexos e entregar resultados
            de alta qualidade.
          </p>

          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white mt-6"
          >
            SOFT SKILLS
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base"
          >
            <p className="mb-2">
              <b>Disciplina e Organização:</b> Experiência em ambientes de alta
              pressão, com foco em resultados e cumprimento de prazos.
            </p>

            <p className="mb-2">
              <b>Trabalho em Equipe:</b> Habituado a colaborar em projetos
              complexos, com comunicação clara e eficaz.
            </p>

            <p className="mb-2">
              <b> Resiliência e Liderança: </b>Capacidade de superar desafios e
              motivar equipes, buscando soluções criativas e eficientes.
            </p>

            <p className="mb-2">
              <b> Adaptabilidade:</b> Facilidade em aprender novas tecnologias e
              se ajustar a diferentes contextos e demandas.
            </p>
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={javascript}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={html}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={figma}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>
            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={react}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={tailwindcss}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={java}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={git}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={webdesign}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>

            <li className="lg:w-1/3 mb-4 w-1/2">
              <img
                src={kanbam}
                alt=""
                className="rounded-full w-24 h-24 object-cover"
              />
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
}
