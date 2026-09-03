<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estrategias logísticas
    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 En un entorno empresarial caracterizado por cambios constantes en la demanda, disponibilidad de recursos y expectativas de los clientes, las organizaciones requieren orientar sus operaciones logísticas hacia resultados medibles y sostenibles. Para ello, resulta fundamental analizar las condiciones de la cadena de suministro, establecer prioridades y articular decisiones relacionadas con abastecimiento, inventarios, almacenamiento, transporte y distribución, procurando un equilibrio entre costos, productividad, capacidad operativa y nivel de servicio.
    
    .row.justify-content-center
      .col-xl-10
        p.mb-0 Por ejemplo, Amazon desarrolla estrategias logísticas basadas en automatización y distribución rápida para fortalecer la experiencia del cliente y reducir tiempos de entrega.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center
      .col-lg-6
        p Las estrategias logísticas son el conjunto de decisiones y acciones planificadas que orientan la gestión de los recursos, procesos y flujos de la cadena de suministro para alcanzar objetivos organizacionales. Su aplicación busca articular abastecimiento, inventarios, almacenamiento, transporte, distribución e información, procurando mejorar la eficiencia operativa, controlar costos y responder oportunamente a las necesidades del cliente.
        p.mb-4.mb-lg-0 En la práctica, una estrategia logística parte del análisis de una necesidad o situación específica y establece qué hacer, cómo hacerlo, con qué recursos, en qué periodo y mediante qué indicadores se verificarán los resultados.
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/tema1/2.png", alt="")
      .col-sm-6.col-lg-3.bg-secundario-s5.rounded-4.p-3.p-xl-4
        p.mb-0 #[strong Ejemplo:] DHL implementa estrategias logísticas apoyadas en tecnología y seguimiento operativo para optimizar rutas de transporte y fortalecer la eficiencia en la distribución internacional.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos

    p.mb-4.mb-lg-5 Las estrategias logísticas pueden establecerse de acuerdo con el proceso que se busca fortalecer, la problemática identificada y los resultados esperados. En este caso se pueden abordarse las siguientes:

    .bg-slider.p-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-sm-8.col-lg-4.d-none.d-xl-block
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema1/3.png", alt="" data-aos="zoom-in-down")
        .col-xl-8
          .tarjeta.tarjeta--blanca
            SlyderA(tipo="a")
              div.my-5.w-75.mx-auto
                h4 Estrategia de abastecimiento
                p Orienta la selección de proveedores, cantidades, frecuencias y condiciones de compra para asegurar la disponibilidad de materiales o productos requeridos por la operación.
                p.mb-0 #[strong Ejemplo aplicado:] una empresa establece entregas semanales con proveedores estratégicos para disminuir faltantes y evitar compras urgentes.
              div.my-5.w-75.mx-auto
                h4 Estrategia de inventarios 
                p Define políticas para mantener niveles adecuados de existencias, considerando demanda, rotación, tiempos de reposición, costos y nivel de servicio esperado. 
                p.mb-0 #[strong Ejemplo aplicado:] una distribuidora establece inventario de seguridad para referencias de alta demanda y controles diferenciados para productos de baja rotación. 
              div.my-5.w-75.mx-auto
                h4 Estrategia de almacenamiento 
                p Organiza espacios, ubicaciones, equipos y movimientos internos para favorecer el aprovechamiento de la capacidad y agilizar las operaciones de recepción, almacenamiento y preparación. 
                p.mb-0 #[strong Ejemplo aplicado:] un centro de distribución ubica los productos de mayor rotación cerca del área de despacho para reducir recorridos durante el #[em picking]. 
              div.my-5.w-75.mx-auto
                h4 Estrategia de distribución 
                p Determina cómo hacer llegar los productos a los diferentes mercados o puntos de entrega, considerando cobertura, canales, frecuencia y necesidades del cliente. 
                p.mb-0 #[strong Ejemplo aplicado:] una comercializadora implementa entregas directas para grandes clientes y utiliza operadores logísticos para pedidos ubicados en zonas alejadas. 
              div.my-5.w-75.mx-auto
                h4 Estrategia de servicio al cliente 
                p Establece condiciones de respuesta relacionadas con disponibilidad, oportunidad, exactitud, información y atención de novedades para cumplir los niveles de servicio definidos. 
                p.mb-0 #[strong Ejemplo aplicado:] una empresa establece entregas en 24 horas para referencias de alta rotación y seguimiento digital del estado de cada pedido. 
              div.my-5.w-75.mx-auto
                h4 Estrategia tecnológica 
                p Incorpora herramientas que fortalecen la automatización, integración de información, trazabilidad y control de las operaciones logísticas. 
                p.mb-0 #[strong Ejemplo aplicado:] un almacén implementa un WMS y códigos de barras para controlar ubicaciones, inventarios y preparación de pedidos. 
              div.my-5.w-75.mx-auto
                h4 Estrategia de logística inversa 
                p Organiza el retorno de productos, materiales o empaques para gestionar devoluciones, recuperación, reutilización, reciclaje o disposición final. 
                p.mb-0 #[strong Ejemplo aplicado:] una empresa establece rutas de retorno para recoger productos rechazados y clasificarlos para recuperación, reincorporación o disposición. 
              div.my-5.w-75.mx-auto
                h4 Estrategia de optimización de costos 
                p Busca mejorar el aprovechamiento de recursos y controlar gastos logísticos, identificando actividades ineficientes sin comprometer el desempeño ni el servicio. 
                p.mb-0 #[strong Ejemplo aplicado:] una distribuidora combina pedidos con destinos cercanos para reducir kilómetros recorridos y consumo de combustible. 

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4.m-lg-0 #[strong Ejemplo:] FedEx utiliza estrategias de seguimiento y rastreo para fortalecer el servicio ofrecido a los clientes.
            .col-8.col-lg-4
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Matrices estratégicas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .p-4.py-lg-3.bg-contenido-a5.rounded-4.mb-3
          p.mb-0 Son herramientas de análisis que permiten organizar, relacionar y valorar información relevante de una organización y su entorno para facilitar la formulación, selección y priorización de estrategias. En logística, ayudan a convertir los resultados de diagnósticos, indicadores y análisis operativos en alternativas concretas de decisión. 
        p Su importancia radica en que permiten comparar diferentes factores y determinar qué situaciones requieren intervención, qué alternativas resultan más convenientes y cómo pueden orientarse los recursos disponibles. Además, estas herramientas permiten evaluar factores internos y externos relacionados con competitividad, mercado, recursos y oportunidades empresariales.
        p.mb-0 Entre las matrices más utilizadas se encuentran DOFA, matriz BCG y matriz de crecimiento.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. 
      span Matrices estratégicas aplicadas a la logística
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        thead
          tr(style="background-color: #ECF8FF")
            th Matriz estratégica 
            th(colspan="2") Característica principal 
            th(colspan="2") Ejemplo empresarial 
        tbody
          tr
            td Matriz DOFA 
            td(colspan="2") Relaciona fortalezas y debilidades internas con oportunidades y amenazas del entorno para formular estrategias acordes con las condiciones de la organización. 
            td(colspan="2") Una empresa combina su amplia cobertura de distribución con el crecimiento del comercio electrónico para desarrollar entregas especializadas de última milla. 
          tr(style="background-color: #F6F6F6")
            td Matriz BCG 
            td(colspan="2") Analiza unidades, productos o líneas de negocio considerando su participación y crecimiento, aportando información para orientar decisiones sobre recursos y operaciones logísticas. 
            td(colspan="2") Una línea con alta demanda y crecimiento puede requerir mayor capacidad de inventario, almacenamiento y distribución. 
          tr
            td Matriz de crecimiento 
            td(colspan="2") Identifica alternativas de crecimiento a partir de la relación entre los productos o servicios de una organización y los mercados en los que participa o pretende ingresar. 
            td(colspan="2") Una organización puede comparar cuatro posibilidades de crecimiento y posteriormente determinar cuál resulta más conveniente según demanda, inversión, infraestructura, capacidad logística, costos, riesgos y nivel de servicio requerido. 

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Aplicabilidad 

    p Las estrategias logísticas se aplican en organizaciones industriales, comerciales y de servicios para fortalecer la eficiencia operativa y mejorar el nivel de servicio al cliente. Su implementación permite optimizar recursos, reducir tiempos y aumentar la competitividad empresarial.
    p.mb-4.mb-lg-5 Pasos para la aplicación de estrategias logísticas:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8.mb-4.mb-lg-0
        SlyderF(columnas="col-sm-6 col-xl-4")
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/7.png' alt='')
            p.mb-4.mb-5.text-center Identificar las necesidades y objetivos de la organización.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/8.png' alt='')
            p.mb-4.mb-5.text-center Analizar procesos de abastecimiento, almacenamiento y distribución.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/9.png' alt='')
            p.mb-4.mb-5.text-center Evaluar recursos, costos y capacidades operativas.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/10.png' alt='')
            p.mb-4.mb-5.text-center Definir estrategias según necesidades del mercado y nivel de servicio.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/11.png' alt='')
            p.mb-4.mb-5.text-center Implementar acciones orientadas al mejoramiento logístico.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/12.png' alt='')
            p.mb-4.mb-5.text-center Realizar seguimiento mediante indicadores de desempeño.
          .tarjeta.tarjeta--blanca.px-4.pt-5.bg-cards
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/13.png' alt='')
            p.mb-4.mb-5.text-center Ajustar estrategias según resultados y cambios del entorno empresarial.

      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/6.png", alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-video.p-4.p-lg-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para ampliar los conocimientos relacionados con estrategias logísticas y su aplicación en organizaciones industriales y servicios fortaleciendo la eficiencia operativa y mejorar el servicio al cliente: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=l_InY3fgP_g" target="_blank")
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
                  p.mb-0 Se invita al aprendiz a profundizar en estrategias logísticas, a través del siguiente artículo: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://tactio.es/wp-content/uploads/2022/04/Guia-estrategia-logistica-para-tu-negocio.pdf" target="_blank")
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
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
