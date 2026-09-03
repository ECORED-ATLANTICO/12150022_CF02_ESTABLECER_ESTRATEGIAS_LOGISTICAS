<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación estratégica y logística

    .bg-botones-a5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 En un entorno empresarial dinámico, las organizaciones necesitan anticiparse a los cambios del mercado y coordinar sus recursos para responder de manera eficiente a las necesidades de clientes y proveedores. En logística, esta orientación permite articular el abastecimiento, los inventarios, el almacenamiento, el transporte y la distribución con las prioridades organizacionales, facilitando la toma de decisiones, la asignación de recursos y el seguimiento de resultados para mantener la competitividad y el nivel de servicio esperado.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La planeación estratégica y logística es el proceso mediante el cual una organización establece objetivos, prioridades y cursos de acción para orientar sus operaciones logísticas en coherencia con sus propósitos organizacionales. Integra la gestión de abastecimiento, inventarios, almacenamiento, transporte, distribución, tecnología y servicio al cliente, considerando los recursos disponibles, las condiciones del mercado y los resultados esperados. Desde su aplicación, permite anticipar necesidades, evaluar alternativas, asignar recursos y establecer acciones e indicadores, procurando que las decisiones logísticas contribuyan al cumplimiento de los objetivos, la eficiencia operativa y la generación de valor.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de planeación
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.mb-3(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")
        p Dentro de la planeación estratégica y logística, los tipos de planeación pueden diferenciarse principalmente por su alcance, nivel de decisión y horizonte de tiempo. Los tres niveles se complementan y permiten llevar los propósitos generales de la organización hasta acciones concretas dentro de la operación. 
        p.mb-0 Entre los tipos de planeación tenemos:
      .col-lg-7
        .bg-slider.p-4.rounded-4
          .tarjeta.tarjeta--blanca
            SlyderA(tipo="a")
              div.my-5.w-75.mx-auto
                h4 Planeación estratégica
                p Define orientaciones y decisiones de largo plazo relacionadas con el rumbo de la organización, considerando mercado, capacidades, inversiones, riesgos y necesidades futuras de la cadena logística.
                p.mb-0 #[strong Ejemplo aplicado a logística:] una empresa proyecta ampliar su cobertura nacional y determina la necesidad de establecer nuevos centros de distribución durante los próximos cinco años.

              div.my-5.w-75.mx-auto
                h4 Planeación táctica  
                p Traduce las decisiones estratégicas en planes de mediano plazo para áreas o procesos específicos, estableciendo recursos, capacidades, responsables y acciones necesarias para alcanzar los resultados previstos. 
                p.mb-0 #[strong Ejemplo aplicado a logística:] el área logística define capacidad de almacenamiento, operadores de transporte, niveles de inventario y recursos requeridos para atender una nueva región. 
              div.my-5.w-75.mx-auto
                h4 Planeación operativa
                p Organiza las actividades de corto plazo necesarias para ejecutar los planes establecidos, especificando tareas, tiempos, recursos, responsables y controles para el funcionamiento cotidiano de la operación. 
                p.mb-0 #[strong Ejemplo aplicado a logística:] un centro de distribución programa diariamente pedidos, personal, vehículos, horarios de despacho y rutas de entrega. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.m-lg-0 #[strong Ejemplo:] Servientrega implementa procesos de planeación operativa para garantizar cumplimiento en tiempos de entrega.
            .col-8.col-lg-3
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Contingencia estratégica
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-contenido-a5.px-4.rounded-4.py-3
          p La contingencia estratégica hace referencia a la planificación anticipada de alternativas de respuesta que una organización establece para enfrentar situaciones imprevistas capaces de afectar el desarrollo normal de sus operaciones y el cumplimiento de sus objetivos. Asimismo, permite disminuir riesgos asociados a interrupciones operativas, cambios del mercado, problemas de abastecimiento y situaciones externas que impacten el funcionamiento empresarial.
          p.mb-0 Entre las situaciones más comunes se encuentran:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3. 
      span Situaciones de contingencia estratégica en logística
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        thead
          tr(style="background-color: #ECF8FF")
            th Situación 
            th(colspan="2") Descripción ampliada 
            th(colspan="2") Ejemplo aplicado 
        tbody
          tr(style="background-color: #F6F6F6")
            td #[strong Interrupciones en cadenas de abastecimiento]
            td(colspan="2") Situaciones que alteran o detienen el flujo normal de materiales, productos o información entre proveedores y demás participantes de la cadena, generando posibles faltantes, retrasos y afectaciones en la continuidad operativa. 
            td(colspan="2") El proveedor principal incumple la entrega de materia prima; la empresa activa un proveedor alternativo para evitar detener la producción. 
          tr
            td #[strong Incrementos inesperados en costos de transporte]
            td(colspan="2") Variaciones no previstas en combustibles, tarifas, peajes, disponibilidad de vehículos u otras condiciones que aumentan los costos de movilización y pueden afectar la rentabilidad y planificación de la distribución. 
            td(colspan="2") Ante un incremento del combustible, una distribuidora consolida pedidos y reorganiza rutas para disminuir recorridos y controlar el costo por entrega. 
          tr(style="background-color: #F6F6F6")
            td #[strong Fallas tecnológicas y operativas]
            td(colspan="2") Eventos relacionados con sistemas, equipos, infraestructura o procedimientos que dificultan la ejecución de las actividades logísticas y pueden afectar inventarios, preparación de pedidos, trazabilidad, despachos o entregas. 
            td(colspan="2") Una falla del WMS impide consultar ubicaciones; el centro de distribución activa registros de respaldo y procedimientos temporales para continuar preparando pedidos. 

    .row.justify-content-center
      .col-xl-10
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-9
              p.mb-4.m-lg-0 #[strong Ejemplo:]  durante contingencias internacionales relacionadas con interrupciones logísticas, empresas como Walmart fortalecieron procesos de abastecimiento alternativo para mantener disponibilidad de productos.
            .col-8.col-lg-3
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Pasos
      
    p.mb-4.mb-lg-5 La formulación de procesos de planeación estratégica y logística requiere desarrollar actividades organizadas que permitan fortalecer la eficiencia operativa y apoyar la toma de decisiones empresariales. Los pasos para poder desarrollar una planeación estratégica y logística son los siguientes:

    










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

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-8.col-sm-4
              figure.pt-3
                img.w-195.mb-4.mb-lg-0(src="@/assets/curso/tema1/16.png", alt="alt")
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="Estrategias logísticas: elemento clave para la competitividad empresarial"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")           

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
