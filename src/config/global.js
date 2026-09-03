export default {
  global: {
    Name: 'Formulación y verificación de estrategias logísticas',
    Description:
      'El componente formativo desarrolla competencias relacionadas con la formulación y verificación de estrategias logísticas mediante el análisis de objetivos, políticas organizacionales, planeación estratégica, presupuestos y normatividad aplicable a los procesos logísticos. Asimismo, fortalece la capacidad para establecer estrategias acordes con el nivel de servicio al cliente, las necesidades del mercado y el marco filosófico de la organización, promoviendo la sostenibilidad, competitividad y cumplimiento de las regulaciones nacionales e internacionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estrategias logísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Matrices estratégicas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicabilidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Objetivos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diseño',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicabilidad',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Política organizacional y logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicabilidad',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planeación estratégica y logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de planeación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Contingencia estratégica',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Pasos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presupuestos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicabilidad',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Desarrollo sostenible y logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Políticas sostenibles',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Ejecución',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Normatividad logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Normatividad vigente',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Aplicabilidad',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Ejemplo caso empresarial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12150022_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso mediante el cual una organización adquiere productos, materiales o servicios necesarios para su operación.',
    },

    {
      termino: 'Agenda local',
      significado:
        'Conjunto de lineamientos y estrategias orientadas al desarrollo económico y social de una región o territorio.',
    },

    {
      termino: 'Cliente',
      significado:
        'Persona u organización que adquiere productos o servicios ofrecidos por una empresa.',
    },

    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una organización para mantenerse y destacarse en el mercado frente a otras empresas.',
    },

    {
      termino: 'Contingencia estratégica',
      significado:
        'Situación imprevista que requiere acciones de respuesta para minimizar impactos dentro de la organización.',
    },

    {
      termino: 'Desarrollo sostenible',
      significado:
        'Modelo de gestión orientado al equilibrio entre crecimiento económico, responsabilidad social y protección ambiental.',
    },

    {
      termino: 'Estrategia logística',
      significado:
        'Conjunto de acciones orientadas a optimizar procesos de abastecimiento, almacenamiento y distribución.',
    },

    {
      termino: 'Indicador',
      significado:
        'Herramienta utilizada para medir el desempeño y cumplimiento de objetivos organizacionales.',
    },

    {
      termino: 'Logística',
      significado:
        'Proceso relacionado con la planificación, ejecución y control del flujo de bienes, servicios e información.',
    },

    {
      termino: 'Matriz estratégica',
      significado:
        'Herramienta de análisis utilizada para apoyar la formulación de estrategias empresariales.',
    },

    {
      termino: 'Mercado',
      significado:
        'Espacio físico o digital donde interactúan compradores y vendedores de bienes o servicios.',
    },

    {
      termino: 'Misión',
      significado:
        'Declaración que describe la razón de ser y propósito principal de una organización.',
    },

    {
      termino: 'Norma',
      significado:
        'Conjunto de reglas o disposiciones que regulan actividades y procesos dentro de una organización o sector económico.',
    },

    {
      termino: 'Objetivo logístico',
      significado:
        'Resultado que la organización busca alcanzar mediante la gestión de sus procesos logísticos.',
    },

    {
      termino: 'Planeación estratégica',
      significado:
        'Proceso orientado a definir objetivos y estrategias para el cumplimiento de metas organizacionales.',
    },

    {
      termino: 'Presupuesto logístico',
      significado:
        'Estimación de recursos financieros destinados a actividades logísticas y operativas.',
    },

    {
      termino: 'Servicio al cliente',
      significado:
        'Conjunto de actividades orientadas a satisfacer necesidades y expectativas del consumidor.',
    },

    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Personas o grupos que tienen interés o influencia en las actividades y decisiones de una organización.',
    },

    {
      termino: 'Visión',
      significado:
        'Proyección futura que establece hacia dónde desea llegar una organización en determinado periodo de tiempo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anaya Tejero, J. J. (2015). Logística integral: la gestión operativa de la empresa (5.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
      link: 'https://laclassedotblog.wordpress.com/wp-content/uploads/2018/05/logistica_administracion_de_la_cadena_de_suministro_5ta_edicion_-_ronald_h-_ballou.pdf',
    },
    {
      referencia:
        'Banco Interamericano de Desarrollo. (2024, 13 de febrero). Impulsando la logística colaborativa para mejorar las cadenas de valor en América Latina y el Caribe.',
      link: 'https://www.iadb.org/es/blog/transporte/impulsando-la-logistica-colaborativa-para-mejorar-las-cadenas-de-valor-en-america-latina-y-el-caribe',
    },
    {
      referencia:
        'Chase, R. B., Jacobs, F. R., & Aquilano, N. J. (2009). Administración de operaciones: producción y cadena de suministros (12.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Corporación Universitaria del Caribe - CECAR. (2022). Logística y cadena de suministro: aproximaciones teórico-prácticas.',
      link: 'https://www.cecar.edu.co/documentos/editorial/e-book/logistica-y-cadena-de-suministro-digital.pdf',
    },
    {
      referencia:
        'David, F. R. (2013). Conceptos de administración estratégica (14.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Granada, I., Landaverde, O., Pinto Ayala, A. M., & Peña, M. (2022). Atlas de infraestructuras de integración de América Latina y el Caribe: Mapeando infraestructuras de transporte y logística de alto impacto en las cadenas de valor regionales.',
      link: 'https://publications.iadb.org/es/publications/spanish/viewer/Atlas-infraestructuras-de-integracion-de-America-Latina-y-el-Caribe.pdf',
    },
    {
      referencia:
        'Ministerio de Transporte. (s. f.). ABC del Sistema de Información de Costos Eficientes para el Transporte Automotor de Carga (SICE-TAC). Gobierno de Colombia.',
      link: 'https://sicetac.mintransporte.gov.co/SiceTAC/ABC-SICE-TAC',
    },
    {
      referencia:
        'Mora García, L. A. (2016). Gestión logística integral: las mejores prácticas en la cadena de abastecimiento (3.ª ed.). Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (2015). Ventaja competitiva: creación y sostenimiento de un desempeño superior. Grupo Editorial Patria.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Andrés Quintero Guzmán',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres ',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
