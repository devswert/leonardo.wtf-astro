export const languages = {
  en: "🇬🇧 English",
  es: "🇨🇱 Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    // Presentation Section
    "presentation.shortHey": "Hey!",
    "presentation.longHey": "Hey there!",
    "presentation.myName": "I'm Leo",
    "presentation.summary":
      "I've been working in tech and building products/services on the internet for the last +10 years, more on the backend side, but I enjoy playing with frontend, infrastructure, and even mobile apps with Flutter",
    "presentation.checkMyCVButton": "Check my CV",
    "presentation.linksLabels.email": "Send me an email",
    "presentation.linksLabels.github": "Check my GitHub profile",
    "presentation.linksLabels.linkedin": "Keep in touch on LikedIn",

    // About me Section
    "aboutMe.title": "About Me",
    "aboutMe.firstParagraph":
      "I'm a software engineer with +10 years of experience. During this time I've learned and grown in distinct scopes, from understanding what software engineering itself is to the importance of being part of a company where I share their mission/vision.",
    "aboutMe.secondParagraph":
      "I've worked building hybrid mobile apps, with frontend, backend, and some things about infrastructure (I love learning new stuff). I'm a person who loves coding, and every day I try to polish my skills to be a better software engineer, taking care of details in implementations that I'm building, from creating good documentation, delivering quality software, measurable, and tested, to the most optimal way to work in a team.",
    "aboutMe.someTools":
      "Some tools that I've used (don't have a particular order):",

    // Experience Section - Titles
    "experiences.professionalTitle": "Professional Experience",
    "experiences.sideProjectsTitle": "Personal/Side Projects",

    // Experience Section - Jobs
    "experiences.jobs.healthatom.timeFrame": "Jan 2024 - Present",
    "experiences.jobs.healthatom.description":
      "After some months of thinking and relaxing, I applied to this company where their mission caught my attention: “help others”.  As a software engineer, I don't only work coding in PHP or javascript, also, I suggest better practices to documentate our software, improve the way we collaborate as a team, and participate in meetings to suggest solutions to incoming requirements. Currently, I'm working in a team where we take care of custom integrations and features for an important company's client.",

    "experiences.jobs.uber.timeFrame": "Sept 2022 - Sept 2023",
    "experiences.jobs.uber.description":
      "After Uber acquired Cornershop, it focused resources on migrating their operation into Uber's ecosystem. I joined a new team, where we build integrations between Partner's APIs and Uber. The integrations were related to the loyalty programs of each Partner and its particular requirements. At Uber, I improved my English communication, learned how a company works and operates on this scale, the importance of Design Docs in software development, monitoring, observability, and microservices.\n\nAnother of my responsibilities was to be part of on-call rotations in my team, where I had to take responsibility for unexpected behaviors in our services.",

    "experiences.jobs.cornershop.timeFrame": "Ago 2021 - Sept 2022",
    "experiences.jobs.cornershop.description":
      "I arrived at Cornershop in 2021. It was an incredible moment because I dreamed of working in a company where, as a customer, I loved their product or service. I worked in the merchant administration panel, creating reports and dashboards for our merchant customers. Here, I started to see how a big company works. I learned the importance of working with more people and teams, scheduling changes, and requesting feedback. I improved my skills in writing tests, thinking and coding software scalable, getting better my communication skills, and improving my English.",

    "experiences.jobs.checkrocket.timeFrame": "May 2015 - Ago 2021",
    "experiences.jobs.checkrocket.description":
      "I was an engineer behind checkrocket.com. I joined the team after a successful MVP, and my responsibility was to create better, stable, and scalable software. Since 2015, we built a better product using Laravel, adding best development practices like CI/CD, testing, migrations to control the schemas, and building a production environment more stable on AWS.\n\nMy roles here were varied, from infrastructure, coding frontend, backend, and the hybrid mobile application.",

    "experiences.jobs.octano.timeFrame": "Ago 2014 - Apr 2015",
    "experiences.jobs.octano.description":
      "My job was to build sites for the agency's clients. Here, I started to have more experience working with customers, listening, and taking better requirements. I was beginning to understand that my role was not only coding; it was about fully solving problems.",

    "experiences.jobs.fxcm.timeFrame": "Mar 2014 - Ago 2014",
    "experiences.jobs.fxcm.description":
      "My principal responsibility was to migrate the company's website to something more administrable and maintainable. Also, I helped to send daily mailing campaigns with news in the forex world.",

    "experiences.jobs.open.timeFrame": "Jun 2013 - Mar 2014",
    "experiences.jobs.open.description":
      "I worked building custom tools for the agency's clients. I learned a bit about the educational environment using different LMS.",

    "experiences.jobs.netglobalis.timeFrame": "Dic 2012 - Mar 2013",
    "experiences.jobs.netglobalis.description":
      "This experience was an internship, where I was the first line of support, answering technical calls, managing some hosting servers, and helping customers to ingress in the server rooms. We worked on an MVP to automate some internal processes with Arduino, but we couldn't finish it.",

    // Experience Section - Side Projects
    "experiences.sideProjects.pi.date": "Present",
    "experiences.sideProjects.pi.description":
      "I'm working (as a freelance) as a backend engineer taking some devops responsibilities. We're building an MVP for an application to have \"home kinesiology sessions\".",

    "experiences.sideProjects.rocota.date": "2023 - Present",
    "experiences.sideProjects.rocota.description":
      "It's an e-commerce store for Rocota, a hand-made brand that creates beautiful pottery pieces. I'm building it with Shopify.",

    "experiences.sideProjects.tomaton.date": "2020",
    "experiences.sideProjects.tomaton.description":
      "It's an application to enjoy with friends simulating a board game. It's a drinking game that each player can play on their device. It has games in real time where everyone votes for someone or mimics with temporizers. It was written with Flutter, using Cloud Firestore, and designed from scratch with Figma. It's abandoned, but I'm planning/developing a second version.",

    "experiences.sideProjects.pideclub.date": "2019",
    "experiences.sideProjects.pideclub.description":
      "It was a small e-commerce store for people who needed control of their products, manage public catalogs, and process orders. The potential clients were Instagram profiles that sell products or services via DM. Sadly, the MVP/pilot didn't have the expected impact.",

    // Education Section
    "education.title": "Education",
    "education.firstParagraph":
      "I started acquiring technical knowledge when I was 15. I studied in a technical school where I got a technical title in telecommunications. After that, from 2013 until 2017, I worked during the day and studied Computer Engineering at Duoc UC at night. However, most of my knowledge was acquired by resolving problems in companies where I worked, and the constant self-learning.",
    "education.secondParagraph":
      "I completed some courses in Udemy about Flutter, GraphQL, and AWS CloudFormation.",

    // No tech things Section
    "noTechThings.title": "!(No) tech things",
    "noTechThings.firstParagraph":
      "I live with my partner, my little princess (my daughter), 2 bunnies, and 2 cockatiels. It's a beautiful family, even if it sometimes looks like a zoo. For some years, I volunteered in a pet rescue ONG; spending time helping animals was something meaningful, and I hope to help again in another organization. I love a good cup of coffee with a V60 Dripper and tasty beans. Sometimes, I play cards with friends, like Magic or Mitos y Leyendas, and with my partner, we play Overcooked 2 at the end of the day; we love that game.",

    // Footer Section
    "footer.message": "{coded} with {love}",
    "footer.codeSourceLinkLabel": "Check the code source",

    // Not Found UI
    "notFound.text": "The page you're looking for doesn't exist",
    "notFound.link": "Go back",
  },
  es: {
    // Presentation Section
    "presentation.shortHey": "Hola!",
    "presentation.longHey": "Hola!",
    "presentation.myName": "Soy Leo",
    "presentation.summary":
      "He trabajado en tech construyendo productos/servicios en internet en los en los últimos +10 años, más en el lado del backend, pero disfruto jugar con frontend, infraestructura, e incluso mobile apps con Flutter",
    "presentation.checkMyCVButton": "Échale un ojo a mi CV",
    "presentation.linksLabels.email": "Envíame un email",
    "presentation.linksLabels.github": "Revisa mi perfil de GitHub",
    "presentation.linksLabels.linkedin": "Mantengámonos en contacto en LikedIn",

    // About Me Section
    "aboutMe.title": "Sobre Mi",
    "aboutMe.firstParagraph":
      "Soy un ingeniero de software con +10 años de experiencia. Durante este tiempo he aprendido y crecido en distintos ámbitos, desde comprender qué es la ingeniería de software, a entender lo importante que es formar parte en una compañía en la que comparto su misión/visión.",
    "aboutMe.secondParagraph":
      "He trabajado construyendo aplicaciones móviles híbridas, con frontend, backend, y algunas cosas de infraestructura (me encanta aprender cosas nuevas). Soy una persona que disfruta de codear, y cada día trato de pulir mis habilidades para ser un mejor ingeniero de software, poniendo atención en los detalles de las implementaciones que estoy construyendo, desde crear buena documentación, entregando software de calidad, medible, y testeado, hasta la manera más óptima de trabajar en equipo.",
    "aboutMe.someTools":
      "Algunas herramientas que he usado (no tienen ningún orden en particular):",

    // Experience Section - Titles
    "experiences.professionalTitle": "Experiencia Profesional",
    "experiences.sideProjectsTitle": "Proyectos Personales",

    // Experience Section - Jobs
    "experiences.jobs.healthatom.timeFrame": "Ene 2024 - Presente",
    "experiences.jobs.healthatom.description":
      "Después de unos meses de pensar y relajarme, apliqué a esta compañía donde su misión captó mi atención: “ayudar a otros”. Como Software Engineer, no solo trabajo codeando en PHP o javascript, también sugiero mejores prácticas para documentar nuestro software, mejorar la forma en que colaboramos como equipo, y participar en reuniones para sugerir soluciones a nuevos requerimientos. Actualmente estoy trabajando en una célula/equipo donde nos preocupamos de integraciones y requerimientos personalizados para un cliente importante de la compañía.",

    "experiences.jobs.uber.timeFrame": "Sept 2022 - Sept 2023",
    "experiences.jobs.uber.description":
      "Luego de la adquisición de Cornershop por parte de Uber, se enfocaron recursos en mover su operación dentro del ecosistema de Uber. Me uní a un equipo nuevo, donde construimos integraciones entre las APIs de los Partners y Uber. Principalmente las integraciones estaban relacionadas a los programas de lealtad de cada Partner y sus requerimientos particulares. En Uber mejoré mi comunicación en Inglés, aprendí como funciona y opera una compañía de gran escala, la importancia de los Design Docs en el proceso de desarrollo de software, monitoreo, observabilidad, y micro servicios.\n\nOtra de mis responsabilidades fué ser parte de las rotaciones de on-call de mi equipo, donde debía tomar responsabilidad de situaciones inesperadas en nuestros servicios.",

    "experiences.jobs.cornershop.timeFrame": "Ago 2021 - Sept 2022",
    "experiences.jobs.cornershop.description":
      "Llegué a Cornershop en el 2021. Fué un momento increíble porque siempre soñé en trabajar en una compañía dónde, como cliente, me encante el producto o servicio ofrecido. Trabajé en el panel de administración de las tiendas, creando reportes y dashboards para nuestros administradores de tiendas. Aquí empecé a ver como una empresa de mayor escala funciona internamente. Aprendí sobre la importancia de trabajar con más gente y más equipos, planificar cambios y solicitar feedback. Mejoré mis habilidades escribiendo tests, pensando y codeando software más escalable, mejorando mis habilidades de comunicación, y mi inglés.",

    "experiences.jobs.checkrocket.timeFrame": "May 2015 - Ago 2021",
    "experiences.jobs.checkrocket.description":
      "Era un ingeniero detrás de checkrocket.com. Me uní al equipo luego de un exitoso MVP, y mi responsabilidad era crear un software más estable y escalable. Desde el 2015, creamos un mejor producto usando Laravel, agregando mejores prácticas de desarrollo como usar CI/CD, testing, migraciones para controlar los esquemas, y construyendo un entorno de producción más escalable en AWS.\n\nMis roles eran variados, desde diseñar infraestructura, codeando frontend, backend, y la aplicación híbrida.",

    "experiences.jobs.octano.timeFrame": "Ago 2014 - Abr 2015",
    "experiences.jobs.octano.description":
      "Mi trabajo era construir sitios para los clientes de la agencia. Aquí empecé a tener más experiencia trabajando con clientes, escuchando, y tomando mejores requerimientos. Empecé a entender que mi rol no solo era hacer código, sino solucionar problemas de manera completa.",

    "experiences.jobs.fxcm.timeFrame": "Mar 2014 - Ago 2014",
    "experiences.jobs.fxcm.description":
      "Mi principal responsabilidad fué migrar el sitio web de la empresa a algo más administrable y mantenible. Además, ayudé a enviar diariamente campañas por email con novedades acerca del mundo del Forex.",

    "experiences.jobs.open.timeFrame": "Jun 2013 - Mar 2014",
    "experiences.jobs.open.description":
      "Trabajé construyendo herramientas personalizadas para los clientes de la agencia. Aprendí un poco sobre cómo funciona el entorno educacional usando LMS.",

    "experiences.jobs.netglobalis.timeFrame": "Dic 2012 - Mar 2013",
    "experiences.jobs.netglobalis.description":
      "Esta experiencia fué una práctica profesional, donde trabajé en la primera línea de soporte, desde atender llamados técnicos, administrar algunos servidores de hosting, e ingresar clientes a las instalaciones de servidores. Hicimos un piloto web donde se pretendía automatizar algunos procesos internos con algunos Arduinos, pero no alcanzó a ser finalizado.",

    // Experience Section - Side Projects
    "experiences.sideProjects.pi.date": "Presente",
    "experiences.sideProjects.pi.description":
      'Estoy trabajando (de freelance) Backend Engineer tomando algunas responsabilidades de DevOps. Estamos construyendo un MVP para una aplicación de "sesiones de kinesiología en casa".',

    "experiences.sideProjects.rocota.date": "2023 - Presente",
    "experiences.sideProjects.rocota.description":
      "Es un e-commerce para la tienda Rocota, una marca que crea hermosas piezas de cerámica hechas a mano. Está siendo construido con Shopify.",

    "experiences.sideProjects.tomaton.date": "2020",
    "experiences.sideProjects.tomaton.description":
      "Es una aplicación para disfrutar con amigos simulando un tablero de juego. Es una app para beber donde cada uno puede jugar en su propio dispositivo. Cuenta con juegos en tiempo real como votar todos por alguien, o mímicas con temporizadores. Fué escrito con Flutter, usando Cloud Firestore, y diseñado desde cero con Figma. Actualmente está abandonado, pero estoy planeando una segunda versión.",

    "experiences.sideProjects.pideclub.date": "2019",
    "experiences.sideProjects.pideclub.description":
      "Es un pequeño e-commerce para las tiendas que necesitaban un control sobre sus productos, tener un catálogo de productos, y procesar algunas órdenes de compra. Los potenciales clientes eran los perfiles en Instagram que vendían productos o servicios vía DM. Lamentablemente, el MVP no tuvo el impacto esperado.",

    // Education Section
    "education.title": "Educación",
    "education.firstParagraph":
      "Empecé adquiriendo conocimiento técnico desde que tenía 15 años. Estudié en un colegio técnico-profesional donde obtuve un título de técnico en telecomunicaciones. Después de eso, desde el 2013 al 2017, trabajé durante el día y estudié Ingeniería en Informática en Duoc UC de noche. Aunque la gran mayoría del conocimiento con el que cuento fué la experiencia resolviendo problemas en las empresas donde trabajé, y el constante aprendizaje autónomo.",
    "education.secondParagraph":
      "Completé también algunos cursos en Udemy sobre Flutter, GraphQL, y AWS CloudFormation.",

    // No tech things Section
    "noTechThings.title": "Cositas !(No) tech",
    "noTechThings.firstParagraph":
      "Vivo con mi pareja, mi pequeña princesa (mi hija), 2 conejitos, y 2 cacatúas ninfa. Es una hermosa familia, incluso cuando a veces parece un zoo. Por algunos años, fuí voluntario en una ONG de rescate de animales, pasar mi tiempo ayudando animales fué algo significativo, y espero poder volver a ayudar a otra ONG en algún momento. Me enamora una buena taza de café hecha con una V60 y unos buenos granos. A veces juego cartas con amigos, como Magic o Mitos y Leyendas, y con mi pareja jugamos Overcooked 2 al final del día, amamos ese juego.",

    // Footer Section
    "footer.message": "{coded} with {love}",
    "footer.codeSourceLinkLabel": "Revisa el código fuente",

    // Not Found UI
    "notFound.text": "La página que buscas no existe",
    "notFound.link": "Volver",
  },
} as const;
