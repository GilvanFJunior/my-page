import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/bikcraft.png';
import image2 from '../../assets/dogs.png';
import image3 from '../../assets/animais-fantasticos.png';
import image4 from '../../assets/previsao-do-tempo.png';
import image5 from '../../assets/gerador-de-senhas.png';
import image6 from '../../assets/to-do-list.png';

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: image,
      title: 'Bikcraft',
      description: 'É página web de vendas de Bicicletas.',
    },
    {
      id: 2,
      image: image2,
      title: 'Dogs',
      description: 'É uma rede social para postagens de fotos de cachorros.',
    },
    {
      id: 3,
      image: image3,
      title: 'Animais Fantásticos',
      description:
        'É uma página que fala sobre animais e suas caractéristicas.',
    },
    {
      id: 4,
      image: image4,
      title: 'Previsão do Tempo',
      description: 'É uma web app sobre o clima de qualquer lugar do mundo.',
    },
    {
      id: 5,
      image: image5,
      title: 'Gerenciador de Senhas',
      description: 'É um web app que cria senhas aleatórias.',
    },
    {
      id: 6,
      image: image6,
      title: 'Gerenciador de Tarefas',
      description: 'Um To Do List que deixa anotado todas as tarefas.',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">MY PROJECTS</h2>
        <Slider {...settings}>
          {listProjects.map((project) => {
            return (
              <div key={project.id} className="p-4">
                <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
