import Cv from "../components/icons/Cv.astro";


export const perfil = [{
  nombre: "Anthony Castro",
  profesion: "Licenciado En Informatica En Administrativa",
  descripcion: "Egresado de Licenciatura en Informática Administrativa en la Universidad Nacional Autónoma de Honduras, con conocimientos en análisis, diseño y desarrollo de aplicaciones web, tanto en frontend como en backend. Apasionado por aprender y crear soluciones digitales funcionales.",
  ubicacion: "Tegucigalpa, Honduras",
  email: "ajcasavila2006@gmail.com",
  telefono: "+504 9926-8791",
  Cv: "/images/CV_Anthony_Castro_Avila.pdf"

}]


export const proyectos = [
  {
    titulo: "Concursos Publico UNAH",
    descripcion: "Plataforma web para la gestión de concursos públicos en la Universidad Nacional Autónoma de Honduras (UNAH). Permite a los usuarios registrarse, postularse a concursos y gestionar sus aplicaciones de manera eficiente.",
    imagen: "/images/ConcursosUnah.png",
    url: "http://concursos-test.unah.edu.hn.s3-website-us-east-1.amazonaws.com/#/landing",
    icons: {
      tecnologia1: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      tecnologia2: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      tecnologia3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      tecnologia4: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg",
      tecnologia5: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
      tecnologia6: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      tecnologia7: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",

    }

  },
  {
    titulo: "Ecommerce - Tienda Virtual",
    imagen: "/images/Ecommerse.png",
    descripcion: "Proyecto en desarrollo de una tienda virtual, donde se implementan funcionalidades de catálogo de productos, carrito de compras, autenticación de usuarios y gestión de pedidos. El proyecto utiliza tecnologías modernas para ofrecer un rendimiento óptimo y una experiencia de usuario responsiva.",
    icons: {
      tecnologia1: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      tecnologia2: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg",
      tecnologia3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      tecnologia4: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
      },
     
    estado: "En desarrollo",
    url: "https://github.com/TonyAjca21/Proyecto-ECOMMERSEFront" // como no tiene link aún
  }
  ,
  {
    "titulo": "Lunas-snackbar",
    "imagen": "/images/lunas-img.png",
   "descripcion": "Proyecto diseñado con enfoque responsivo y experiencia de usuario amigable. integración con Firebase para almacenamiento de imágenes y autenticación, y estilos modernos con Tailwind CSS. El proyecto combina React y Astro para optimizar el rendimiento y la interactividad del sitio, ofreciendo una experiencia fluida tanto en desktop como en dispositivos móviles."
    ,
    "icons": {
      "tecnologia1": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      "tecnologia2": "https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg",
    
      "tecnologia4": "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg"
    },
   
    "url": "https://lunas-snack-bar.vercel.app/"
  }


]

export const experiencia = [
  {
    puesto: "Practica Profesional Licenciado en Informatica Administrativa",
    descripcion: "Participación en el desarrollo y mantenimiento de sistemas informáticos internos, contribuyendo a la optimización de procesos administrativos mediante la implementación de soluciones tecnológicas efectivas.",
    fechainicio: "Julio 2022",
    fechafin: "Diciembre 2022",
    empresa: "DEGT-UNAH",
    ubicacion: "Tegucigalpa, Honduras",
    actividades: [{
      "Colaborar en el desarrollo y mantenimiento de sistemas informáticos internos.": "",
      "Asistir en la implementación de soluciones tecnológicas para optimizar procesos administrativos.": "",
      "Realizar pruebas y depuración de software para garantizar su correcto funcionamiento.": "",
      "Documentar procedimientos y actualizaciones de sistemas.": "",
      "Participar en reuniones de equipo para discutir avances y desafíos.": ""
    }]
  },
  {
    puesto: "Beca por desempeño en Desarrollo Frontend",
    descripcion: "Desarrollo y mantenimiento de la plataforma web de concursos públicos de la Universidad Nacional Autónoma de Honduras (UNAH) utilizando Angular. Implementación de nuevas funcionalidades, optimización del rendimiento y aseguramiento de la calidad del código mediante pruebas y revisiones.",
    fechainicio: "Enero 2023",
    fechafin: "Diciembre 2023",
    empresa: "DEGT-UNAH",
    ubicacion: "Tegucigalpa, Honduras",
    actividades: [{
      "Desarrollar y mantener la plataforma web de concursos públicos utilizando Angular.": "",
      "Colaborar con el equipo de diseño para implementar interfaces de usuario atractivas y funcionales.": "",
      "Optimizar el rendimiento de la aplicación para mejorar la experiencia del usuario.": "",
      "Realizar pruebas y depuración para garantizar la calidad del código.": "",
      "Participar en reuniones de equipo para discutir avances y planificar futuras mejoras.": ""
    }]
  }

]

export const certificados = [
  {
  "titulo": "Constancia de Egresado - Licenciatura en Informática",
  "descripcion": "Constancia que acredita la finalización de los estudios de la Licenciatura en Informática, demostrando los conocimientos adquiridos en áreas de programación, sistemas, bases de datos y tecnología de la información.",
  "imagen": "/images/costanciaEgresado.png",      
  "archivo": "/images/costanciaEgresado.pdf",
  "nombreDescarga": "ConstanciaInformatica.pdf"

},
 
  {
    "titulo": "Introducción a la Agilidad",
    "descripcion": "Curso que introduce los conceptos fundamentales de metodologías ágiles y su aplicación en proyectos y equipos de trabajo.",
    "imagen": "/images/Introduccion a la agilidad.png",
    "archivo": "/images/diplomaAgilidad.pdf",
    "nombreDescarga": "diplomaAgilidad.pdf"
  },
  {
    "titulo": "Introducción a Scrum",
    "descripcion": "Certificado que aborda los principios y prácticas de Scrum, permitiendo gestionar proyectos de manera ágil y colaborativa.",
    "imagen": "/images/Introduccion Scrum.png",
    "archivo": "/images/diplomaScrum.pdf",
    "nombreDescarga": "diplomaScrum.pdf"
  },
  {
    "titulo": "Formulación y evaluación de proyectos",
    "descripcion": "Curso orientado a aprender a planificar, formular y evaluar proyectos de manera eficiente, asegurando resultados exitosos.",
    "imagen": "/images/formulacion y evalucion de proyecto.png",
    "archivo": "/images/Formulación y evaluación de proyectos.pdf",
    "nombreDescarga": "Formulación y evaluación de proyectos.pdf"
  },
  {
    "titulo": "Transformación digital y evolución tecnológica",
    "descripcion": "Diploma que certifica conocimientos en digitalización de procesos y adaptación a nuevas tecnologías en entornos profesionales.",
    "imagen": "/images/transformacion Digital.png",
    "archivo": "/images/Transformación digital y evolución tecnológica.pdf",
    "nombreDescarga": "Transformación digital y evolución tecnológica.pdf"
  },
  {
    "titulo": "Evaluador de procesos",
    "descripcion": "Certificado que valida la capacidad de analizar, medir y optimizar procesos organizacionales para mejorar la eficiencia.",
    "imagen": "/images/evaluador de procesos.png",
    "archivo": "/images/Evaluador de procesos.pdf",
    "nombreDescarga": "evaluador de procesos.pdf"
  },
  {
    "titulo": "High School Diploma",
    "descripcion": "Diploma que acredita la finalización de estudios de educación secundaria, con conocimientos generales en diversas áreas académicas.",
    "imagen": "/images/DiplomaHighSchool.png",
    "archivo": "/images/DiplomaHighSchool.pdf",
    "nombreDescarga": "DiplomaHighSchool.pdf"
  }


];
