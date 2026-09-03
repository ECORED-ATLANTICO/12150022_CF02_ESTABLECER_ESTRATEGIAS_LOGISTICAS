<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Objetivos logísticos

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la gestión de la cadena de suministro, orientar las operaciones hacia resultados concretos permite articular de manera coherente las actividades de abastecimiento, almacenamiento, inventarios, transporte y distribución.  

        p.mb-0 Esta orientación facilita establecer prioridades, aprovechar adecuadamente los recursos, responder a las necesidades del mercado y mantener un equilibrio entre costos, productividad, tiempos y nivel de servicio, generando referentes para evaluar posteriormente el desempeño de las estrategias implementadas. 

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Concepto 

    .row.justify-content-center.align-items-center
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Los objetivos logísticos son metas establecidas por la organización para optimizar el flujo de bienes, servicios e información dentro de la cadena logística. Estos objetivos facilitan la toma de decisiones relacionadas con costos, tiempos, inventarios y nivel de servicio ofrecido a los clientes. Asimismo, permiten coordinar recursos y actividades orientadas al mejoramiento continuo de los procesos logísticos y operativos. 

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2	Tipos

    p.mb-4.mb-lg-5 Los objetivos logísticos pueden establecerse según el resultado que la organización espera alcanzar en sus procesos de abastecimiento, almacenamiento, inventarios, transporte, distribución y servicio. Para este caso, se pueden abordar los más importantes, y son los siguientes: 

    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-xl-4
        figure
          img.mb-4.mb-xl-0(src="@/assets/curso/tema2/3.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        TabsA.color-acento-botones
          .tarjeta.p-4.bg-primario-p5.py-5(titulo="Objetivos de reducción de costos")
            p Orientado a disminuir gastos asociados con transporte, almacenamiento, inventarios y demás actividades, procurando mantener las condiciones requeridas de operación y servicio. 
            p.mb-0 #[strong Ejemplo:] reducir en un 8 % el costo de transporte mediante consolidación de cargas y optimización de rutas. 
          .tarjeta.p-4.bg-primario-p5.py-5(titulo="Objetivos de servicio al cliente")
            p Busca fortalecer el cumplimiento de las condiciones acordadas con el cliente respecto a disponibilidad, oportunidad, exactitud, calidad e información de los pedidos. 
            p.mb-0 #[strong Ejemplo:] alcanzar un 95 % de entregas completas y dentro del tiempo acordado durante el próximo semestre. 
          .tarjeta.p-4.bg-primario-p5.py-5(titulo="Objetivos de productividad")
            p Se enfoca en obtener mejores resultados mediante el aprovechamiento de personal, equipos, infraestructura, tecnología y tiempos disponibles en los procesos logísticos. 
            p.mb-0 #[strong Ejemplo:] incrementar de 80 a 100 pedidos preparados por jornada utilizando los recursos actuales. 
          .tarjeta.p-4.bg-primario-p5.py-5(titulo="Objetivos de sostenibilidad")
            p Promueve prácticas que reduzcan impactos ambientales asociados con transporte, embalajes, consumo de recursos, residuos y devoluciones, manteniendo la viabilidad de la operación. 
            p.mb-0 #[strong Ejemplo:] reducir kilómetros recorridos mediante consolidación de entregas y planificación de rutas. 

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4.m-lg-0 #[strong Ejemplo:] IKEA desarrolla estrategias sostenibles para optimizar transporte y reducir emisiones contaminantes.
            .col-8.col-lg-4
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3	Diseño 

    .bg-botones-a5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Es el proceso mediante el cual se establecen los resultados que se esperan alcanzar en la gestión de la cadena de suministro, tomando como referencia el diagnóstico de la operación, las necesidades del cliente y las prioridades organizacionales. Los objetivos deben formularse de manera clara, medible y alcanzable para facilitar su seguimiento y evaluación. Además, permite orientar las estrategias y disponer de criterios concretos para verificar posteriormente su cumplimiento.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')

    p.mb-4.mb-lg-5 Asimismo, deben estar alineados con la misión, visión y políticas organizacionales para fortalecer la planeación estratégica de la empresa. 

    p.mb-4.mb-lg-5 Pasos para el diseño de objetivos logístico: 


    SlyderF(columnas="col-sm-6 col-xl-4 mb-5")
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/7.png' alt='')
        h4.text-center Análisis logístico
        p.mb-4.mb-5.text-center Evaluar los procesos, recursos y desempeño actual para identificar fortalezas, debilidades y oportunidades de mejora.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/8.png' alt='')
        h4.text-center Necesidades del mercado
        p.mb-4.mb-5.text-center Determinar requerimientos y expectativas de los clientes y del entorno para orientar la respuesta logística.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/9.png' alt='')
        h4.text-center Definición de metas
        p.mb-4.mb-5.text-center Establecer metas específicas en costos, tiempos y nivel de servicio acordes con las necesidades identificadas.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/10.png' alt='')
        h4.text-center Indicadores de resultados
        p.mb-4.mb-5.text-center Seleccionar indicadores clave que permitan medir, controlar y verificar el avance hacia las metas establecidas.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/11.png' alt='')
        h4.text-center Alineación organizacional
        p.mb-4.mb-5.text-center Asegurar que los objetivos estén alineados con las políticas, estrategias y prioridades de la organización.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/12.png' alt='')
        h4.text-center Implementación de estrategias
        p.mb-4.mb-5.text-center Ejecutar las estrategias definadas, asignando recursos, responsables y acciones para alcanzar las metas propuestas.
      .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
        .row.justify-content-center.mb-3
          .col-6
            img.imgw-80(src='@/assets/curso/tema1/13.png' alt='')
        h4.text-center Evaluación y ajustes
        p.mb-4.mb-5.text-center Evaluar los resultados obtenidos, comparar con las metas y realizar ajustes para la mejora continua.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4.m-lg-0 #[strong Ejemplo:] FedEx diseña objetivos logísticos enfocados en rapidez operativa y cumplimiento de entregas internacionales.
            .col-8.col-lg-4
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4	Aplicabilidad

    p Los objetivos logísticos se aplican en empresas industriales, comerciales y de servicios para mejorar procesos operativos y fortalecer el nivel de servicio ofrecido al cliente. Su implementación facilita la organización de actividades relacionadas con abastecimiento, inventarios, transporte y distribución. 
    p Asimismo, permiten optimizar recursos y apoyar la toma de decisiones estratégicas orientadas al crecimiento y sostenibilidad empresarial. 
    p.mb-4.mb-lg-5 Su aplicación se refleja principalmente en: 

    .bg-slider.p-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-sm-8.col-lg-3.d-none.d-lg-block
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema2/6.png", alt="" data-aos="zoom-in-down")
        .col-lg-9.col-xl-8
          .tarjeta.tarjeta--blanca
            SlyderA(tipo="a")
              div.my-5.w-75.mx-auto
                h4 Orientar decisiones 
                p.mb-0 Facilita establecer prioridades y seleccionar acciones logísticas acordes con las necesidades detectadas, evitando decisiones aisladas que no contribuyan a los resultados esperados. 
              div.my-5.w-75.mx-auto
                h4 Asignar recursos 
                p.mb-0 Permite determinar los recursos humanos, tecnológicos, financieros y operativos necesarios para desarrollar las acciones relacionadas con cada objetivo establecido. 
              div.my-5.w-75.mx-auto
                h4 Establecer metas 
                p.mb-0 Convierte las necesidades logísticas en resultados específicos y medibles relacionados con costos, tiempos, productividad, inventarios, calidad y nivel de servicio. 
              div.my-5.w-75.mx-auto
                h4 Formular estrategias 
                p.mb-0 Proporciona una referencia para seleccionar y estructurar estrategias que respondan directamente a los resultados que la organización pretende alcanzar. 
              div.my-5.w-75.mx-auto
                h4 Medir el desempeño 
                p.mb-0 Facilita asociar indicadores y criterios de medición que permitan conocer el avance, cumplimiento y comportamiento de los procesos frente a las metas propuestas. 
              div.my-5.w-75.mx-auto
                h4 Verificar resultados 
                p.mb-0 Permite comparar los resultados obtenidos con los objetivos planteados para determinar la efectividad de las estrategias y reconocer posibles desviaciones. 

    .row.justify-content-center
      .col-xl-10
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4.m-lg-0 #[strong Ejemplo:] Walmart aplica objetivos logísticos relacionados con control de inventarios y disponibilidad de productos en puntos de venta para fortalecer la experiencia del consumidor.
            .col-8.col-lg-4
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

                .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-video.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con política organizacional y logística y su aplicación en empresas industriales, comerciales y de servicios. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=kTbof9tbZOo" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-recurso.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Se invita al aprendiz a profundizar en lo relacionado a objetivos logísticos, a través del siguiente libro. Páginas 34-35. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.fesc.edu.co/portal/archivos/e_libros/logistica/gestion_logistica.pdf" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
