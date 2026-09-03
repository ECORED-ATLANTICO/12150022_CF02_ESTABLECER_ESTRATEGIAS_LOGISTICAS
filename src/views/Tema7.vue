<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normatividad logística 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La normatividad logística corresponde al conjunto de normas, regulaciones y lineamientos que orientan las actividades relacionadas con transporte, almacenamiento, distribución, comercio y servicio dentro de la cadena logística. Su aplicación permite garantizar cumplimiento legal, seguridad operativa y eficiencia en los procesos organizacionales.
      
    p.mb-0 Actualmente, las organizaciones deben ajustar sus operaciones logísticas a normas nacionales e internacionales relacionadas con calidad, seguridad, sostenibilidad y comercio, fortaleciendo la competitividad y el cumplimiento de los requerimientos del mercado. Por ejemplo, DHL aplica normativas internacionales relacionadas con transporte, seguridad y operaciones logísticas en diferentes países.

    separador
    
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1	Normatividad vigente

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p En Colombia, la normatividad vigente en logística comprende las disposiciones legales, reglamentarias y técnicas que deben considerarse según el tipo de operación, mercancía y actividad desarrollada. Su aplicación permite orientar procesos de transporte, almacenamiento, distribución, seguridad, gestión ambiental y manejo de productos bajo condiciones establecidas por las autoridades competentes.
        .bg-primario-p5.rounded-4.p-4.py-3.mb-3
          p.mb-0 Cabe anotar que en el país no existe una única “ley de logística”. La actividad logística está regulada por diferentes normas según transporte, almacenamiento, comercio exterior, mercancías, seguridad, ambiente, alimentos y características de la operación. 
        p.mb-4.mb-lg-0 Las principales nomas aplicables a la logística en Colombia son:
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/2.png", alt="")

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4. 
      span Normas vigentes aplicadas a logística
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        thead
          tr(style="background-color: #ECF8FF")
            th Norma
            th Tema
            th(colspan="2") Aplicación en logística
        tbody
          tr
            td #[strong Ley 105 de 1993] 
            td Sector transporte
            td(colspan="2") Establece disposiciones básicas sobre transporte y principios relacionados con la infraestructura y prestación del servicio. Es un referente general para la movilización de mercancías.
          tr(style="background-color: #F6F6F6")
            td #[strong Ley 336 de 1996 - Estatuto Nacional de Transporte] 
            td Transporte 
            td(colspan="2") Establece disposiciones generales para los diferentes modos de transporte y constituye uno de los principales referentes legales del sector. 
          tr
            td #[strong Decreto 1079 de 2015] 
            td Sector transporte 
            td(colspan="2") Es el Decreto Único Reglamentario del Sector Transporte. Reúne disposiciones aplicables al transporte terrestre automotor, incluida la operación de carga. 
          tr
            td #[strong Resolución 20223040045515 de 2022]
            td Transporte de carga - RNDC 
            td(colspan="2") Regula aspectos operativos del Registro Nacional de Despachos de Carga, utilizado para registrar información relacionada con las operaciones de transporte terrestre de carga. 
          tr(style="background-color: #F6F6F6")
            td #[strong Ley 9 de 1979 - Código Sanitario Nacional] 
            td Condiciones sanitarias
            td(colspan="2") Establece disposiciones sanitarias aplicables, entre otras actividades, al almacenamiento y transporte de alimentos, bebidas y determinados productos.
          tr
            td #[strong Resolución 2674 de 2013] 
            td Logística de alimentos
            td(colspan="2") Establece requisitos sanitarios para fabricación, almacenamiento, transporte, distribución y comercialización de alimentos y materias primas. Es especialmente relevante para cadenas de suministro de alimentos.
          tr(style="background-color: #F6F6F6")
            td #[strong Decreto 1165 de 2019] 
            td Régimen aduanero
            td(colspan="2") Regula las operaciones relacionadas con el ingreso, permanencia, traslado y salida de mercancías del territorio aduanero nacional. Es fundamental para logística internacional.
          tr
            td #[strong Normativa reglamentaria DIAN del régimen aduanero] 
            td Comercio exterior
            td(colspan="2") Complementa el régimen aduanero y desarrolla procedimientos relacionados con importación, exportación, tránsito y demás operaciones aduaneras. La DIAN mantiene una compilación normativa actualizada.
          tr(style="background-color: #F6F6F6")
            td #[strong Decreto 1072 de 2015] 
            td Seguridad y salud en el trabajo
            td(colspan="2") Constituye un referente para gestionar la seguridad y salud de los trabajadores que participan en almacenamiento, manipulación, transporte y demás operaciones logísticas.
          tr
            td #[strong Decreto 1076 de 2015] 
            td Gestión ambiental
            td(colspan="2") Compila la reglamentación del sector ambiente y constituye un referente para aspectos ambientales que pueden involucrar residuos y actividades desarrolladas dentro de las cadenas logísticas.
          tr(style="background-color: #F6F6F6")
            td #[strong Resolución 1407 de 2018] 
            td Envases y empaques
            td(colspan="2") Reglamenta la gestión ambiental de residuos de envases y empaques de papel, cartón, plástico, vidrio y metal. Tiene relación directa con sostenibilidad y logística inversa.
          tr
            td #[strong Ley 1480 de 2011 - Estatuto del Consumidor] 
            td Protección al consumidor
            td(colspan="2") Incide en las relaciones comerciales y en aspectos asociados con entrega, calidad, información, garantías y cumplimiento frente al consumidor.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2	Aplicabilidad

    .bg-botones-a5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 La aplicación de la normatividad logística depende del tamaño de la empresa, tipo de operación y servicio logístico desarrollado. Su implementación facilita el cumplimiento legal, el control operativo y el fortalecimiento de la competitividad empresarial dentro de mercados nacionales e internacionales. Así mismo, las empresas deben ajustar sus procesos logísticos según regulaciones relacionadas con transporte, seguridad, sostenibilidad, comercio exterior y atención al cliente.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema7/3.png', alt='')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5. 
      span Aplicabilidad de la normatividad logística según tipo de organización
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. Adaptada de David (2013); Mora García (2016); legislación logística colombiana y regulaciones internacionales de comercio.
        thead
          tr(style="background-color: #ECF8FF")
            th Tipo de organización
            th Aplicabilidad normativa
            th Beneficio organizacional
            th Ejemplo empresarial
        tbody
          tr
            td #[strong Microempresa] 
            td Cumplimiento básico relacionado con transporte, seguridad y atención al cliente.
            td Fortalece organización operativa y cumplimiento legal básico.
            td Emprendimientos de distribución local y comercio digital.
          tr(style="background-color: #F6F6F6")
            td #[strong Pequeña empresa] 
            td Aplicación de normas relacionadas con calidad y control operativo.
            td Mejora procesos logísticos y competitividad regional.
            td Empresas regionales de almacenamiento y distribución.
          tr
            td #[strong Mediana empresa] 
            td Implementación de normas de calidad, seguridad y sostenibilidad.
            td Optimiza operaciones y fortalece crecimiento empresarial.
            td Empresas comerciales y operadores logísticos nacionales.
          tr
            td #[strong Gran empresa] 
            td Aplicación de normas nacionales e internacionales relacionadas con calidad, sostenibilidad y comercio exterior.
            td Fortalece competitividad y expansión empresarial. 
            td FedEx desarrolla operaciones ajustadas a regulaciones internacionales. 
          tr(style="background-color: #F6F6F6")
            td #[strong Operador logístico internacional] 
            td Aplicación de normativas aduaneras, comercio exterior y seguridad logística global. 
            td Facilita operaciones internacionales y control de riesgos logísticos. 
            td DHL implementa estándares internacionales en transporte y distribución. 
          tr
            td #[strong Empresa de comercio electrónico] 
            td Aplicación de normas relacionadas con comercio digital y protección de datos.
            td Fortalece confianza del consumidor y seguridad de operaciones digitales.
            td Amazon implementa regulaciones de comercio electrónico y protección de información.

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-video.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con normatividad logística y su aplicación en las organizaciones. 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=yCTJ3V1ONZE" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-xl-8
        .tarjeta.bg-recurso.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-12
                  p.mb-3 Se invita al aprendiz a profundizar en normatividad logística, a través de los siguientes artículos: 
                .col-12.d-flex.gap-2.justify-content-evenly.flex-column.flex-sm-row
                  a.boton.color-acento-botones.texto-blanco(href="https://www.acppasamblea.org/wp-content/uploads/2024/10/Norma-ISO-9001-2015.pdf" target="_blank")
                    span Ir al recurso
                  a.boton.color-acento-botones.texto-blanco(href="https://www.nueva-iso-14001.com/pdfs/FDIS-14001.pdf" target="_blank")
                    span Ir al recurso
                  a.boton.color-acento-botones.texto-blanco(href="https://www.esesoacha.gov.co/wp-content/uploads/2025/04/ISO-45001-norma-Internacional-IMG.pdf" target="_blank")
                    span Ir al recurso


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
