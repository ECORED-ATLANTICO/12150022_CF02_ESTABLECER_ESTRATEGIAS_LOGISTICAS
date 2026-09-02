<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p El componente formativo Formulación y verificación de estrategias logísticas aborda el estudio de las estrategias aplicadas a los procesos de aprovisionamiento, distribución y servicio al cliente dentro de las organizaciones. En un entorno empresarial dinámico y competitivo, las empresas requieren formular estrategias alineadas con sus objetivos corporativos, necesidades del mercado y políticas organizacionales para fortalecer la eficiencia operativa y el nivel de servicio.
        .bg-botones-a5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 Su importancia radica en que permite establecer estrategias logísticas orientadas al mejoramiento de los procesos organizacionales mediante la planeación estratégica, formulación de objetivos, aplicación de políticas, control presupuestal y cumplimiento de normas y regulaciones logísticas. Asimismo, facilita la toma de decisiones relacionadas con sostenibilidad, competitividad y adaptación a los cambios del entorno empresarial.
      .col-sm-10.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro.png", alt="")
    
    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro.svg", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 El tema se abordará de manera progresiva, iniciando con el estudio de estrategias logísticas, objetivos y políticas organizacionales, continuando con la planeación estratégica, presupuestos logísticos y desarrollo sostenible. Posteriormente, se desarrollarán aspectos relacionados con normatividad logística, adopción de agendas locales y análisis de casos empresariales aplicados a la formulación y verificación de estrategias logísticas.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
