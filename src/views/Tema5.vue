<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Presupuestos logísticos

    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Contar con esta información facilita tomar decisiones, establecer prioridades y controlar el comportamiento de los gastos frente a los resultados esperados, contribuyendo al cumplimiento de los objetivos y a la sostenibilidad de las estrategias formuladas por la organización. 
    
    separador 

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 El presupuesto logístico es una herramienta financiera que permite calcular y organizar los costos asociados a las operaciones logísticas de una empresa. Este presupuesto facilita la planeación de recursos relacionados con inventarios, transporte, almacenamiento, tecnología y distribución. Asimismo, permite controlar gastos operativos y evaluar la rentabilidad de las estrategias implementadas dentro de la cadena logística. 

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos

    p.mb-4.mb-lg-5 Los presupuestos logísticos pueden estructurarse de acuerdo con los procesos, recursos y actividades que generan costos dentro de la cadena de suministro. Esta clasificación facilita proyectar las necesidades económicas de cada operación, asignar recursos y controlar posteriormente su ejecución frente a los resultados obtenidos. Entre los presupuestos logísticos más importantes tenemos:  

    .bg-slider.p-4.rounded-4.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .col-sm-8.col-lg-3.d-none.d-xl-block
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema5/3.png", alt="" data-aos="zoom-in-down")
        .col-xl-8
          .tarjeta.tarjeta--blanca
            SlyderA(tipo="a")
              div.my-5.w-75.mx-auto
                h4 Presupuesto de abastecimiento 
                p Proyecta los recursos requeridos para compras, aprovisionamiento y recepción de materiales o productos, considerando cantidades, precios, proveedores y condiciones necesarias para mantener la continuidad operativa. 
                p.mb-0 #[strong Ejemplo:] una empresa estima $80 millones trimestrales para adquirir materias primas, considerando demanda proyectada, precios negociados y frecuencia de reposición. 
              div.my-5.w-75.mx-auto
                h4 Presupuesto de inventarios 
                p Estima los recursos asociados con mantener existencias, considerando niveles de inventario, rotación, seguros, obsolescencia y capital requerido para garantizar la disponibilidad de productos. 
                p.mb-0 #[strong Ejemplo:] una distribuidora proyecta los recursos necesarios para mantener inventario de seguridad de sus referencias de mayor demanda durante la temporada alta.  
              div.my-5.w-75.mx-auto
                h4 Presupuesto de almacenamiento 
                p Contempla los recursos destinados a instalaciones, equipos, servicios, mantenimiento, manipulación y demás actividades necesarias para conservar y gestionar adecuadamente las mercancías almacenadas.  
                p.mb-0 #[strong Ejemplo:] un centro de distribución proyecta gastos mensuales de arrendamiento, energía, mantenimiento de montacargas y materiales utilizados en las operaciones de almacenamiento. 
              div.my-5.w-75.mx-auto
                h4 Presupuesto de transporte 
                p Determina los recursos económicos requeridos para movilizar mercancías, llevar los pedidos hasta los diferentes destinos, considerando vehículos, combustible, mantenimiento, peajes, tarifas de transportadores y demás costos asociados con los desplazamientos. 
                p.mb-0 #[strong Ejemplo:] una empresa estima el costo mensual de sus rutas considerando kilómetros recorridos, combustible, peajes, mantenimiento y tarifas contratadas con transportadores externos. 
              div.my-5.w-75.mx-auto
                h4 Presupuesto tecnológico 
                p Establece los recursos destinados a adquirir, implementar, mantener o actualizar tecnologías que apoyan la trazabilidad, automatización, información y control de las operaciones logísticas. 
                p.mb-0 #[strong Ejemplo:] la organización proyecta recursos para implementar un WMS, adquirir lectores de códigos de barras y capacitar al personal encargado de utilizar la tecnología. 
              div.my-5.w-75.mx-auto
                h4 Presupuesto de personal logístico 
                p Estima los recursos relacionados con el talento humano requerido para desarrollar las actividades logísticas, considerando remuneración, contratación, capacitación y necesidades adicionales de personal. 
                p.mb-0 #[strong Ejemplo:] durante la temporada alta, una empresa proyecta contratar diez auxiliares adicionales para fortalecer las actividades de preparación y despacho de pedidos. 
              div.my-5.w-75.mx-auto
                h4 Presupuesto de contingencia 
                p Reserva recursos para responder a situaciones imprevistas que puedan afectar la continuidad logística, evitando que determinadas eventualidades comprometan significativamente la ejecución de las estrategias establecidas. 
                p.mb-0 #[strong Ejemplo:] una empresa dispone una reserva para atender aumentos inesperados del transporte, fallas de equipos o contratación urgente de alternativas de distribución. 

    .row.justify-content-center
      .col-lg-10.col-xl-8
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4.m-lg-0 #[strong Ejemplo:] Mercado Libre realiza presupuestos de almacenamiento para fortalecer sus centros logísticos y procesos de despacho.

            .col-8.col-lg-4
              figure
                img.imgw-220(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-11
        p.mb-0 Los presupuestos logísticos se aplican en organizaciones industriales, comerciales y de servicios para planificar recursos y controlar gastos relacionados con las operaciones logísticas. Su implementación facilita la toma de decisiones financieras y el mejoramiento de la eficiencia operativa. Asimismo, permiten evaluar inversiones y establecer estrategias orientadas a reducir costos y fortalecer la competitividad empresarial.


    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 1.
      span Pasos para la aplicación de presupuestos logísticos
    img.mb-4.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/5-mob.svg", alt="La figura la aplicación progresiva de un presupuesto logístico dentro de una organización. La secuencia integra la identificación de necesidades operativas con la planificación y asignación de recursos financieros, así como su posterior seguimiento y evaluación. El carácter cíclico evidencia que la gestión presupuestal requiere revisión permanente y ajustes frente a los resultados obtenidos y las condiciones del entorno, favoreciendo el control de los recursos y la continuidad de las operaciones logísticas.")
    img.mb-4.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/5.svg", alt="La figura la aplicación progresiva de un presupuesto logístico dentro de una organización. La secuencia integra la identificación de necesidades operativas con la planificación y asignación de recursos financieros, así como su posterior seguimiento y evaluación. El carácter cíclico evidencia que la gestión presupuestal requiere revisión permanente y ajustes frente a los resultados obtenidos y las condiciones del entorno, favoreciendo el control de los recursos y la continuidad de las operaciones logísticas.")
    //- figcaption Nota. Adaptada de SENA, (2026).
 
    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-grandiente-secundario.p-4.py-lg-0.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-4.m-lg-0 #[strong Ejemplo:] Grupo Nutresa aplica presupuestos logísticos para fortalecer procesos de abastecimiento, distribución y control operativo dentro de sus diferentes líneas de negocio.

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
                  p.mb-0 A continuación, se invita a ir al siguiente video para ampliar los conocimientos relacionados con estrategias logísticas y su aplicación en organizaciones industriales y servicios fortaleciendo la eficiencia operativa y mejorar el servicio al cliente: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=mlhV9BQfEQ4" target="_blank")
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
                  p.mb-0 Se invita al aprendiz a profundizar en presupuestos logísticos, a través del siguiente artículo: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://thelogisticsworld.com/wp-content/uploads/2023/12/E-Book-Tecnologia-Logistica.pdf " target="_blank")
                    span Ir al recurso




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
