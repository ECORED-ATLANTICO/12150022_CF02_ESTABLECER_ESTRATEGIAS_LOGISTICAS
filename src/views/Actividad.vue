<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico de las estrategias en la logística',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el conocimiento adquirido sobre las generalidades estrategias logísticas: planeación y verificación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de una estrategia logística?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los costos operativos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Coordinar y optimizar las actividades de abastecimiento, almacenamiento, transporte, distribución y servicio al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar los controles establecidos en los procesos logísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la participación del cliente en las decisiones organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las estrategias logísticas permiten coordinar y optimizar las actividades de la cadena para mejorar la eficiencia y fortalecer la competitividad empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto y aplicabilidad de las estrategias logísticas.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta permite analizar fortalezas, debilidades, oportunidades y amenazas de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Matriz BCG.', esCorrecta: false },
            { id: 'b', texto: 'Matriz de crecimiento.', esCorrecta: false },
            { id: 'c', texto: 'Presupuesto logístico.', esCorrecta: false },
            { id: 'd', texto: 'Matriz DOFA.', esCorrecta: true },
          ],
          mensaje_correcto:
            'La matriz DOFA permite analizar factores internos y externos para apoyar la formulación de estrategias organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las matrices estratégicas y su aplicabilidad.',
        },
        {
          id: 3,
          texto: '¿Cuál es una característica de los objetivos logísticos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deben formularse de manera clara, medible y alcanzable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Deben establecerse sin considerar las necesidades del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Deben orientarse exclusivamente al incremento de los inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Deben formularse sin relación con las políticas organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los objetivos logísticos deben formularse de manera clara, medible y alcanzable para facilitar su seguimiento y evaluación.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto, diseño y aplicabilidad de los objetivos logísticos.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito de una política organizacional y logística?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar los procedimientos establecidos para las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar los tiempos de respuesta al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Orientar y regular las actividades mediante lineamientos y criterios de actuación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la coordinación entre las diferentes áreas de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las políticas organizacionales y logísticas permiten orientar y regular las actividades mediante lineamientos y criterios de actuación.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto, tipos y diseño de las políticas organizacionales y logísticas.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes corresponde a un objetivo de servicio al cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir exclusivamente los costos de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la cantidad de productos almacenados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Disminuir la participación de los clientes en los procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar los tiempos de respuesta, el cumplimiento de entregas y la satisfacción del consumidor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los objetivos de servicio al cliente buscan mejorar los tiempos de respuesta, el cumplimiento de las entregas y la satisfacción del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los tipos y aplicabilidad de los objetivos logísticos.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un paso para la aplicación de la planeación estratégica y logística?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar las necesidades operativas y estratégicas de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender la evaluación de los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el análisis de las capacidades organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificar las necesidades operativas y estratégicas permite orientar la formulación de estrategias y acciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los pasos para la aplicación de la planeación estratégica y logística.',
        },
        {
          id: 7,
          texto: '¿Qué se entiende por contingencia estratégica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una actividad destinada exclusivamente al control presupuestal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una política utilizada para organizar los inventarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una situación imprevista que requiere acciones de respuesta para minimizar impactos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un procedimiento para establecer precios de los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La contingencia estratégica corresponde a una situación imprevista que requiere acciones de respuesta para minimizar sus impactos en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la contingencia estratégica dentro de la planeación logística.',
        },
        {
          id: 8,
          texto: '¿Qué es un presupuesto logístico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una herramienta utilizada únicamente para controlar el servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una herramienta financiera para calcular y organizar los costos asociados a las operaciones logísticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un documento destinado exclusivamente a establecer políticas organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un procedimiento para identificar las amenazas del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El presupuesto logístico permite calcular y organizar los recursos financieros relacionados con las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto y aplicabilidad de los presupuestos logísticos.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una característica que deben cumplir los objetivos logísticos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estar alineados con la misión, visión y políticas organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Establecerse únicamente según los costos de transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definirse sin considerar las capacidades operativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Orientarse exclusivamente al aumento de las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los objetivos logísticos deben estar alineados con la misión, visión y políticas organizacionales para fortalecer la planeación estratégica.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el diseño y aplicabilidad de los objetivos logísticos.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes corresponde a un tipo de presupuesto logístico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presupuesto de servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto de competitividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto de misión organizacional.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Presupuesto de transporte.', esCorrecta: true },
          ],
          mensaje_correcto:
            'El presupuesto de transporte permite planificar los costos relacionados con traslado de mercancías, rutas, combustibles y distribución.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los tipos de presupuestos logísticos.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el propósito del desarrollo sostenible aplicado a la logística?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar el consumo de recursos sin evaluar sus impactos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las prácticas de responsabilidad social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Equilibrar el crecimiento económico, la responsabilidad social y la protección ambiental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la importancia de la protección ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El desarrollo sostenible busca equilibrar el crecimiento económico, la responsabilidad social y la protección ambiental en los procesos logísticos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el desarrollo sostenible y la logística.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes acciones hace parte del planteamiento de estrategias sostenibles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar el impacto ambiental de las operaciones logísticas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los indicadores de sostenibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar los impactos ambientales de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el seguimiento de las prácticas responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Analizar el impacto ambiental permite identificar oportunidades de mejora y orientar estrategias sostenibles en la cadena logística.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el planteamiento de estrategias sostenibles.',
        },
        {
          id: 13,
          texto: '¿Qué permite la aplicación de la normatividad logística?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los controles operativos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar el cumplimiento legal, la seguridad operativa y la eficiencia de los procesos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la competitividad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Suspender el cumplimiento de las regulaciones nacionales e internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La aplicación de la normatividad logística permite fortalecer el cumplimiento legal, la seguridad operativa y la eficiencia de los procesos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la normatividad logística vigente y su aplicabilidad.',
        },
        {
          id: 14,
          texto:
            '¿Qué norma está orientada a los sistemas de gestión ambiental?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'ISO 9001.', esCorrecta: false },
            { id: 'b', texto: 'ISO 45001.', esCorrecta: false },
            { id: 'c', texto: 'ISO 14001.', esCorrecta: true },
            { id: 'd', texto: 'Normativa aduanera.', esCorrecta: false },
          ],
          mensaje_correcto:
            'La ISO 14001 está orientada a los sistemas de gestión ambiental y permite fortalecer las prácticas de sostenibilidad.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las normas vigentes aplicadas a los procesos logísticos.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es una característica de la agenda local aplicada a la logística?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la participación de las entidades públicas y privadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la planeación del desarrollo territorial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir la competitividad empresarial de la región.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover el desarrollo regional y fortalecer la infraestructura logística y comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La agenda local contribuye al desarrollo regional mediante acciones orientadas al fortalecimiento de la infraestructura logística y comercial.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las características y aplicabilidad de las agendas locales.',
        },
        {
          id: 16,
          texto:
            '¿Qué estrategia logística está orientada a garantizar la disponibilidad de materias primas, productos o servicios?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estrategia de abastecimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estrategia de distribución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia de expansión logística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategia de servicio al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La estrategia de abastecimiento está orientada a garantizar la disponibilidad de materias primas, productos o servicios necesarios para la operación.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los tipos de estrategias logísticas y su aplicabilidad.',
        },
        {
          id: 17,
          texto: '¿Cuál es una finalidad de los presupuestos logísticos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la planificación de los recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar los gastos operativos sin realizar controles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Planificar recursos, controlar gastos y apoyar la toma de decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la evaluación de las inversiones realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los presupuestos logísticos permiten planificar recursos, controlar gastos y apoyar la toma de decisiones estratégicas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la aplicabilidad de los presupuestos logísticos.',
        },
        {
          id: 18,
          texto:
            '¿Qué acción contribuye al diseño de políticas organizacionales y logísticas?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar las responsabilidades de las áreas involucradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir lineamientos y criterios de actuación alineados con los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Formular políticas sin considerar el marco filosófico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los mecanismos de control de las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diseño de políticas requiere definir lineamientos y criterios de actuación alineados con los objetivos de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el diseño de políticas organizacionales y logísticas.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es uno de los beneficios de implementar una agenda local?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la articulación entre los sectores productivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las iniciativas de desarrollo empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir las oportunidades de crecimiento regional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer la competitividad, productividad y sostenibilidad de las organizaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La implementación de agendas locales permite fortalecer la competitividad, productividad y sostenibilidad mediante acciones articuladas en el territorio.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la agenda local y su adopción.',
        },
        {
          id: 20,
          texto:
            '¿Qué permite verificar una estrategia logística después de su implementación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eliminación de los objetivos organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El cumplimiento de los resultados mediante indicadores de desempeño y ajustes de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La reducción del seguimiento de las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La suspensión de las acciones de mejora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La verificación mediante indicadores permite evaluar los resultados obtenidos y realizar ajustes de mejora según las necesidades del entorno empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la formulación, implementación y verificación de las estrategias logísticas.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha aprobado satisfactoriamente la actividad de aprendizaje. Su resultado evidencia la apropiación de los conceptos relacionados con la formulación y verificación de estrategias logísticas.',
      mensaje_final_reprobado:
        'Aún puede fortalecer sus conocimientos. Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con estrategias, objetivos, políticas, planeación, contingencias, presupuestos, sostenibilidad, normatividad y agenda local. ',
    },
  }),
}
</script>
