<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/sintesis.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El componente formativo Formulación y verificación de estrategias logísticas aborda la formulación y verificación de estrategias logísticas desde una perspectiva integral, articulando herramientas para analizar, planificar y orientar decisiones dentro de la cadena de suministro. Comprende la caracterización y aplicación de alternativas estratégicas, el establecimiento de objetivos medibles y la construcción de políticas coherentes con las prioridades organizacionales. Asimismo, incorpora distintos niveles de planeación, contingencias y procedimientos para estructurar acciones frente a condiciones previstas e imprevistas. El manejo presupuestal permite proyectar recursos, controlar costos y valorar la viabilidad de las decisiones planteadas. A su vez, se integran criterios de sostenibilidad para promover operaciones responsables y eficientes, junto con referentes normativos que respaldan su cumplimiento. Finalmente, mediante un caso empresarial, se articulan los conocimientos desarrollados para analizar situaciones, seleccionar alternativas, ejecutar acciones y verificar resultados en contextos logísticos reales.

    .row.justify-content-center
      .col-lg-10.col-xl-8
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="")
      .col-12
        .row.justify-content-center
          .col-auto
            a.anexo.mb-5.d-block(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/bullets/icono-pdf.svg")
              .anexo__texto
                p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
