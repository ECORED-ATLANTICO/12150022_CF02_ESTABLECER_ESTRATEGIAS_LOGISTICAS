<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Ejemplo caso empresarial
      
    .bg-botones-a5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema8/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las organizaciones requieren formular y verificar estrategias logísticas orientadas al fortalecimiento de la competitividad, optimización de recursos y mejoramiento del nivel de servicio al cliente. Para ello, resulta fundamental analizar situaciones empresariales reales que permitan comprender la aplicación de estrategias, políticas, presupuestos y normatividad dentro de los procesos logísticos.

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-recurso.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Caso empresarial aplicado. Distribuciones Caribe S.A.S.
                  p.mb-0 Lo invitamos a descargar el siguiente documento, el cual explica de manera detallada la formulación y verificación de estrategias logísticas.
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://tactio.es/wp-content/uploads/2022/04/Guia-estrategia-logistica-para-tu-negocio.pdf" target="_blank")
                    span Ir al recurso

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-10
        .tarjeta.bg-video.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema1/14.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con casos donde las organizaciones requieren formular y verificar estrategias logísticas orientadas al fortalecimiento de la competitividad, optimización de recursos y mejoramiento del nivel de servicio al cliente:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=VfSCXT750t8 " target="_blank")
                    span Ir al recurso




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
