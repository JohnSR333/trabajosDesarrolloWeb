const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
  {
    titulo: "Laptop",
    desc: "16GB RAM",
    image: "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png",
    price: "$12.000.000"
  },
  {
    titulo: "Mouse",
    desc: "Inalámbrico",
    image: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2020/06/Mouse-Logitech-G-PRO-1-600x600.jpg",
    price: "$250.000"
  },
  {
    titulo: "Teclado",
    desc: "Mecánico RGB",
    image: "https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg",
    price: "$300.000"
  },
  {
    titulo: "Monitor",
    desc: "27'' 4K UHD",
    image: "https://megacomputer.com.co/wp-content/uploads/2024/09/1-1.webp",
    price: "$800.000"
  },
  {
    titulo: "Auriculares",
    desc: "Cancelación de ruido",
    image: "https://i.blogs.es/086109/mejores-auriculares-gaming-guia-de-compra/1366_2000.jpg",
    price: "$150.000"
  }
];

productos.forEach(p => {
  const clon = template.content.cloneNode(true);
  clon.querySelector(".title").textContent = p.titulo;
  clon.querySelector(".desc").textContent = p.desc;
  clon.querySelector(".product-image").src = p.image;
  clon.querySelector(".product-price").textContent = p.price;
  contenedor.appendChild(clon);
});

