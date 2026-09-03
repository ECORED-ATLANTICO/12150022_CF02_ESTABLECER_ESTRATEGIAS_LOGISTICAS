<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Desarrollo sostenible y logística 

    .row.justify-content-center.align-items-center
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Las organizaciones enfrentan el desafío de mantener operaciones logísticas eficientes mientras responden a las exigencias económicas, sociales y ambientales del entorno. Esto implica revisar la manera en que se gestionan los recursos, el transporte, los inventarios, los empaques, los residuos y las devoluciones, procurando reducir impactos innecesarios sin afectar la productividad ni el nivel de servicio. 
        p.mb-0 El desarrollo sostenible en logística corresponde a la implementación de estrategias y acciones orientadas a equilibrar el crecimiento económico, la responsabilidad social y la protección ambiental dentro de los procesos logísticos de una organización. Su aplicación permite fortalecer la competitividad empresarial mediante prácticas responsables relacionadas con abastecimiento, transporte, almacenamiento y distribución. Actualmente, las organizaciones incorporan políticas sostenibles para optimizar recursos, reducir impactos ambientales y responder a las necesidades del mercado y las regulaciones nacionales e internacionales.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1	Políticas sostenibles

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las políticas sostenibles son el conjunto de lineamientos orientados a promover prácticas responsables dentro de las operaciones logísticas y organizacionales. Estas políticas permiten disminuir impactos ambientales, fortalecer el uso eficiente de recursos y mejorar la imagen corporativa de la empresa. Asimismo, facilitan el cumplimiento de normas relacionadas con sostenibilidad, responsabilidad social y protección del medio ambiente. Estas políticas deben guardar relación con los objetivos y estrategias de la organización y convertirse en un referente para la toma de decisiones. Entre las más utilizadas en la logística se encuentran: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/3.png", alt="" data-aos="zoom-in-down")
      .col-xl-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-contenido-a10").mb-5
          div(titulo="Ambiental")
            .ms-5
              p Orienta la prevención y reducción de impactos ambientales derivados de las operaciones, considerando consumo de recursos, emisiones, residuos y uso responsable de materiales.
              p.mb-0 #[strong Ejemplo:] consolidar cargas y optimizar rutas para disminuir recorridos, consumo de combustible y emisiones asociadas al transporte.
          div(titulo="Eficiencia energética ")
            .ms-5
              p Establece criterios para controlar y disminuir el consumo energético de instalaciones, equipos, vehículos y tecnologías utilizadas en los procesos logísticos. 
              p.mb-0 #[strong Ejemplo:] sustituir progresivamente equipos de iluminación del almacén por alternativas de menor consumo energético. 
          div(titulo="Gestión de residuos ")
            .ms-5
              p Define lineamientos para prevenir, separar, aprovechar, recuperar o disponer adecuadamente los residuos generados durante las actividades de la organización. 
              p.mb-0 #[strong Ejemplo:] clasificar cartón, plástico y materiales de embalaje provenientes de la recepción y preparación de pedidos para facilitar su aprovechamiento. 
          div(titulo="Compras sostenibles")
            .ms-5
              p Incorpora criterios ambientales, sociales y económicos en la selección de proveedores, productos, materiales y servicios requeridos por la organización. 
              p.mb-0 #[strong Ejemplo:] evaluar proveedores considerando precio y cumplimiento, además del uso de empaques reciclables y prácticas responsables. 

    .bg-slider.p-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-xl-8
          .tarjeta.tarjeta--blanca
            SlyderA(tipo="a")
              div.my-5.w-75.mx-auto
                h4 Transporte sostenible 
                p Promueve alternativas que permitan movilizar mercancías utilizando eficientemente vehículos, rutas y capacidades, procurando disminuir impactos ambientales y costos operativos. 
                p.mb-4 #[strong Ejemplo:] consolidar pedidos por zonas y aumentar la ocupación de los vehículos para reducir viajes innecesarios.  
              div.my-5.w-75.mx-auto
                h4 Logística inversa 
                p Orienta la recuperación y retorno de productos, empaques o materiales para favorecer su reutilización, aprovechamiento, reciclaje o disposición adecuada. 
                p.mb-4 #[strong Ejemplo:] establecer rutas de retorno para recuperar embalajes reutilizables durante las entregas realizadas a clientes. 
              div.my-5.w-75.mx-auto
                h4 Social 
                p Establece criterios relacionados con condiciones responsables de trabajo, seguridad, inclusión y relaciones adecuadas con trabajadores, proveedores, comunidades y demás actores vinculados con la operación. 
                p.mb-4 #[strong Ejemplo:] establecer condiciones de seguridad y tiempos adecuados de trabajo para el personal encargado del transporte y manipulación de mercancías. 
              div.my-5.w-75.mx-auto
                h4 Economía circular 
                p Favorece la conservación del valor de productos y materiales mediante prácticas de reducción, reutilización, reparación, recuperación y reincorporación dentro de los procesos. 
                p.mb-4 #[strong Ejemplo:] recuperar estibas utilizadas en las entregas, inspeccionarlas, repararlas cuando sea necesario y reincorporarlas a la operación logística. 
        .col-sm-8.col-lg-3.d-none.d-xl-block
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="" data-aos="zoom-in-down")










</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
