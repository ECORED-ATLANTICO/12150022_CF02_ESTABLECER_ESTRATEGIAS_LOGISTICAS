<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Política organizacional y logística 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-contenido-a5.p-4.rounded-4.py-3.pe-xl-5
          p.mb-0.me-xl-4 En el desarrollo de las operaciones logísticas, las decisiones deben mantener coherencia con los lineamientos, prioridades y propósitos establecidos por la organización. Esta articulación permite orientar adecuadamente la gestión del abastecimiento, inventarios, almacenamiento, transporte y distribución, definiendo criterios para el uso de recursos, la relación con proveedores y clientes, el cumplimiento de requisitos y la actuación frente a diferentes situaciones operativas, favoreciendo así una gestión organizada y consistente con los resultados esperados.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las políticas organizacionales y logísticas son el conjunto de lineamientos y criterios establecidos por una organización para orientar la toma de decisiones y el desarrollo de sus procesos logísticos. Define referentes para gestionar recursos, proveedores, inventarios, almacenamiento, transporte, distribución y servicio al cliente, procurando que las estrategias y acciones implementadas sean coherentes con los objetivos organizacionales, requisitos aplicables y condiciones de la operación. 

    p.mb-0 En términos prácticos, establece un marco de actuación que orienta cómo deben tomarse y ejecutarse las decisiones logísticas, facilitando que las diferentes áreas trabajen bajo criterios comunes y contribuyan al cumplimiento de los resultados esperados.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Dentro de una organización pueden establecerse diferentes políticas para orientar la gestión de los procesos logísticos. Para este caso, resultan especialmente pertinentes las siguientes: 

    .row.justify-content-center.align-items-center
      .col-xl-9.mb-4.mb-xl-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10").mb-5
          div(titulo="Políticas de abastecimiento")
            .ms-5
              p Establece criterios para seleccionar proveedores, realizar compras y asegurar la disponibilidad oportuna de materiales y productos requeridos por la operación. 
              p.mb-0 #[strong Ejemplo:] mantener proveedores alternativos para productos críticos y disminuir riesgos de desabastecimiento. 
          div(titulo="Políticas de almacenamiento")
            .ms-5
              p Define condiciones para recepción, ubicación, conservación, manipulación y control de mercancías, buscando aprovechar adecuadamente los espacios y preservar los productos. 
              p.mb-0 #[strong Ejemplo:] ubicar mercancías según rotación, características y condiciones requeridas de almacenamiento. 
          div(titulo="Políticas de transporte")
            .ms-5
              p Orienta la selección de medios, rutas, frecuencias y condiciones de movilización necesarias para realizar entregas de manera eficiente y oportuna. 
              p.mb-0 #[strong Ejemplo:] consolidar pedidos por zonas antes de programar las rutas de distribución. 
          div(titulo="Políticas de servicio al cliente ")
            .ms-5
              p Establece parámetros de atención relacionados con tiempos de respuesta, disponibilidad, entregas, información y gestión de novedades durante el servicio logístico.  
              p.mb-0 #[strong Ejemplo:] atender las reclamaciones relacionadas con entregas dentro de un periodo previamente establecido. 
      .col-xl-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/4.png", alt="" data-aos="zoom-in-down")

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Diseño
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El diseño de políticas organizacionales y logísticas es el proceso mediante el cual se establecen lineamientos que orientan las decisiones y actuaciones relacionadas con los procesos de la organización y su cadena logística. Su elaboración debe considerar los objetivos estratégicos, necesidades de los clientes, características de la operación, recursos disponibles, requisitos aplicables y condiciones del entorno. 
        .bg-primario-p5.p-4.rounded-4.mb-3.py-3
          p.mb-0 En logística, una política bien diseñada proporciona criterios comunes para actuar frente a situaciones relacionadas con abastecimiento, proveedores, inventarios, almacenamiento, transporte, distribución, calidad y servicio al cliente, facilitando que las estrategias formuladas mantengan coherencia con los propósitos de la organización.
        p.mb-0 Para su diseño pueden considerarse los siguientes elementos:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2. 
      span Elementos para el diseño de políticas de logística
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        thead
          tr(style="background-color: #ECF8FF")
            th Elemento 
            th(colspan="5") Aplicación
        tbody
          tr
            td #[strong Diagnóstico organizacional]
            td(colspan="5") Permite conocer las condiciones actuales de los procesos logísticos, identificando necesidades, dificultades, fortalezas y oportunidades que sirven como referencia para establecer lineamientos acordes con la realidad de la organización. 
          tr(style="background-color: #F6F6F6")
            td #[strong Objetivos organizacionales] 
            td(colspan="5") Orientan la construcción de políticas hacia los resultados estratégicos esperados, procurando que las decisiones logísticas contribuyan al cumplimiento de las prioridades, metas y propósitos definidos por la organización. 
          tr
            td #[strong Alcance de la política]
            td(colspan="5") Delimita las áreas, procesos, actividades, recursos y actores sobre los cuales tendrá aplicación la política, facilitando su comprensión y evitando interpretaciones diferentes durante su implementación. 
          tr(style="background-color: #F6F6F6")
            td #[strong Criterios de actuación]
            td(colspan="5") Establecen parámetros para orientar decisiones y comportamientos frente a situaciones específicas, proporcionando referentes comunes para desarrollar las actividades logísticas de manera coherente con los lineamientos organizacionales. 
          tr
            td #[strong Recursos y capacidades]
            td(colspan="5") Consideran la disponibilidad de personal, infraestructura, tecnología, presupuesto y demás medios necesarios para determinar si los lineamientos establecidos pueden implementarse de manera viable dentro de la operación. 
          tr(style="background-color: #F6F6F6")
            td #[strong Requisitos aplicables]
            td(colspan="5") Integran las disposiciones legales, técnicas, contractuales y organizacionales relacionadas con la operación, procurando que las políticas formuladas respondan a las condiciones y obligaciones que debe cumplir la organización. 
          tr
            td #[strong Responsabilidades]
            td(colspan="5") Definen quiénes participan en la aplicación, comunicación, seguimiento y control de la política, facilitando la asignación de funciones y la coordinación entre las diferentes áreas involucradas. 
          tr(style="background-color: #F6F6F6")
            td #[strong Seguimiento y actualización]
            td(colspan="5") Facilitan revisar periódicamente el cumplimiento y pertinencia de las políticas, identificando necesidades de ajuste frente a cambios en los procesos, objetivos, normatividad, mercado o condiciones de la operación logística. 

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Aplicabilidad

    img(data-aos="fade-up")(src="@/assets/curso/tema3/6.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow.mb-4
          p.mb-0 Las políticas organizacionales y logísticas se aplican en empresas industriales, comerciales y de servicios para regular actividades relacionadas con abastecimiento, almacenamiento, distribución y atención al cliente. Su implementación facilita el control operativo, el cumplimiento de objetivos y la toma de decisiones estratégicas. Asimismo, contribuyen al fortalecimiento de la competitividad empresarial y al mejoramiento continuo de los procesos organizacionales. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.m-lg-0 #[strong Ejemplo:] Coca-Cola aplica políticas logísticas relacionadas con distribución, control operativo y servicio al cliente para fortalecer sus operaciones comerciales a nivel internacional.
            .col-8.col-lg-3
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
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con política organizacional, logística y su aplicación en empresas industriales, comerciales y de servicios.   
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
                  p.mb-0 Se invita al aprendiz a profundizar en política organizacional y logística, a través del siguiente artículo: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://ccas.org.co/wp-content/uploads/Logistica-integral.pdf" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
