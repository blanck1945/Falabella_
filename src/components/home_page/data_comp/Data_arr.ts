const icon1 = require("../../../assets/data_icon/icono-covid-blanco.png");
const icon2 = require("../../../assets/data_icon/icono-envios-blanco.png");
const icon3 = require("../../../assets/data_icon/icono-tiendas-blanco.png");
const icon4 = require("../../../assets/data_icon/icono-cambios-blanco.png");

export interface DataArr {
  icon: string;
  label: string;
  data_para: string;
  link: string;
}

export const data_arr: DataArr[] = [
  {
    icon: icon1.default,
    label: "Medidas de Prevención",
    data_para: "cuidamos tu salud y la de nuestros colaboradores",
    link:
      "https://www.falabella.com.ar/falabella-ar/page/Covid-19?staticPageId=10200002&sid=home_BSH1_Covid_030720",
  },
  {
    icon: icon2.default,
    label: "¡estamos entregando!",
    data_para: "Envíos a todo el pais para entregarte lo que necesitás",
    link:
      "https://www.falabella.com.ar/falabella-ar/page/Politica-de-envios?staticPageId=10200021&sid=home_BSH2_Entregas_030720",
  },
  {
    icon: icon3.default,
    label: "tiendas abiertas",
    data_para: "Abrimos sucursales del interíor con horarios especiales",
    link:
      "https://www.falabella.com.ar/falabella-ar/page/Nuestras-tiendas?staticPageId=10200005&sid=home_BSH3_Tiendas_030720",
  },
  {
    icon: icon4.default,
    label: "cambios y devoluciones",
    data_para: "Extendimos los plazos para cambiar o devolver tus compras",
    link:
      "https://www.falabella.com.ar/falabella-ar/page/Politica-de-devolucion-cambios?staticPageId=10200016&sid=home_BSH4_Cambios_030720",
  },
];
