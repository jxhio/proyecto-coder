export const productos = [
  {
    id: 1,
    nombre: "Cartuchera",
    precio: 150,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_700359-MLA48839212124_012022-O.webp",
    categoria:"cartuchera"
  },
  {
    id: 2,
    nombre: "Lapiz Faber HB2",
    precio: 100,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_734998-MLA51246090583_082022-O.webp",
    categoria:"lapices"
  },
  {
    id: 3,
    nombre: "regla 20cm",
    precio: 50,
    imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/225/879/products/regla-20cm-cristal-libreria-casa-segal-mendoza-600x6001-b401213f2e374d64c016125440873190-640-0.jpg",
    categoria:"reglas"
  },
  {
    id: 4,
    nombre: "goma de borrar 2 colores",
    precio: 50,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1XpDxTU894YS54ZqLt7TiQ3FptceaL2J75SSnpwtSg&s",
    categoria:"gomas"
  },
  {
    id: 5,
    nombre: "goma de borrar blanca",
    precio: 50,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUTI-H3XP-vCd-6v90jROYKlBW3IYK2k7t21whwU&s",
    categoria:"gomas"
  },
  {
    id: 6,
    nombre: "Cartuchera Spiderman",
    precio: 350,
    imagen:"https://www.coopehogar.coop/media/ch/publico/articulos/a/8/2/a821d9b7fd2a671d2f3652cb2dae33da",
    categoria:"cartucheras"
  },
  {
    id: 7,
    nombre: "Cartuchera Cars",
    precio: 350,
    imagen:"https://www.oxfordlibreria.com.ar/media/catalog/product/cache/5a38f6614905178fa07804facc7b33a0/9/2/92626374160_20211005140012.jpg",
    categoria:"cartuchera"
  },
  {
    id: 8,
    nombre: "Regla 30cm",
    precio: 150,
    imagen:"https://www.paitis.ar/ps/1921-large_default/regla-30-cm.jpg",
    categoria:"reglas"
  }
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

