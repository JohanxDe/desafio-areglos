//arreglo de propiedades en alquiler
const propiedadesAlquiler = [
    {
        id: 1,
        nombre: "Departamento en el centro",
        imagen: "assets/img/alquilerUno.jpeg",
        descripcion: "Este apartamento de dos habitaciones esta ubicada en el corazon de la ciudad, cerca de TODO",
        direccion: "Calle Falsa 123",
        precio: 500,
        smoke: true,
        pets: false
    },
    {
        id: 2,
        nombre: "Casa en las afueras",
        imagen: "assets/img/alquilerDos.jpeg",
        descripcion: "Hogar ubicado en la tranquilidad de las afueras de la ciudad, locomocion a las afueras del hogar",
        direccion: "Calle Verdadera 456",
        precio: 800,
        smoke: false,
        pets: true
    },
    {
        id: 3,
        nombre: "Estudio moderno",
        imagen: "assets/img/alquilerTres.jpeg",
        descripcion: "Departamento exclusivo en la zona central idealmente para universitarios, solteros",
        direccion: "Avenida Principal 789",
        precio: 600,
        smoke: true,
        pets: true
    },
    {
        id: 4,
        nombre: "Habitación en residencia",
        imagen: "assets/img/alquilerCuatro.jpeg",
        descripcion: "Esta ubicada en apartamento interior",
        direccion: "Calle Secundaria 101",
        precio: 300,
        smoke: false,
        pets: false
    }
];

// Arreglo de propiedades en venta
const propiedadesVenta = [
    {
        id: 1,
        nombre: "Casa familiar",
        imagen: "assets/img/ventaUno.jpeg",
        descripcion: "Exelente casa para toda la familia con la con comodidades adecuadas para todos",
        direccion: "Avenida Libertador 1001",
        precio: 100000,
        smoke: true,
        pets: true
    },
    {
        id: 2,
        nombre: "Departamento moderno",
        imagen: "assets/img/ventaDos.jpeg",
        descripcion: "Lugoso departamento moderno, domotica incluida",
        direccion: "Calle Nueva 202",
        precio: 80000,
        smoke: false,
        pets: false
    },
    {
        id: 3,
        nombre: "Casa en la playa",
        imagen: "assets/img/ventaTres.jpeg",
        descripcion: "Asombrosa casa con la mejor vista al mar y acceso a ella",
        direccion: "Avenida Costera 303",
        precio: 150000,
        smoke: true,
        pets: true
    },
    {
        id: 4,
        nombre: "Apartamento económico",
        imagen: "assets/img/ventaCuatro.jpeg",
        descripcion: "Economico",
        direccion: "Calle Económica 404",
        precio: 50000,
        smoke: false,
        pets: true
    }
];

// Función para mostrar propiedades según el tipo
function mostrarPropiedades(tipo, limite = null) {
    let propiedades;
    let contenedor;

    if (tipo === 'alquiler') {
        propiedades = propiedadesAlquiler;
        contenedor = document.getElementById('propiedades-alquiler');
    } else if (tipo === 'venta') {
        propiedades = propiedadesVenta;
        contenedor = document.getElementById('propiedades-venta');
    }

    // Si se define un límite, truncar el arreglo a esa cantidad
    if (limite) {
        propiedades = propiedades.slice(0, limite);
    }

    propiedades.forEach(propiedad => {
        // Condicionales para determinar el estado de fumar y mascotas
        const fumar = propiedad.smoke ? "Permitido" : "Prohibido";
        const mascotas = propiedad.pets ? "Permitido" : "Prohibido";
        
        // Definir íconos basados en smoke y pets
        const fumarIcon = propiedad.smoke ? "<i class='fas fa-smoking' style='color: green;'></i>" : "<i class='fas fa-smoking-ban' style='color: red;'></i>";
        const mascotasIcon = propiedad.pets ? "<i class='fas fa-paw' style='color: green;'></i>" : "<i class='fas fa-ban' style='color: red;'></i>";


        const propiedadDiv = document.createElement('div');
        propiedadDiv.className = "propiedad-card";
        propiedadDiv.innerHTML = `
            <h2>${propiedad.nombre}</h2>
            <img src="${propiedad.imagen}" alt="${propiedad.nombre}" style="width:155px;height:120px;">
            <p>Descripcion: ${propiedad.descripcion}</p>
            <p>Dirección: ${propiedad.direccion}</p>
            <p>Precio: $${propiedad.precio}</p>
            <p>${fumarIcon} Permite Fumar: ${propiedad.smoke ? "Permitido" : "Prohibido"}</p>
            <p>${mascotasIcon} Permite Mascotas: ${propiedad.pets ? "Permitido" : "Prohibido"}</p>
        `;
        contenedor.appendChild(propiedadDiv);

        // Mostrar alertas para smoke y pets
        if (propiedad.smoke) {
            alert(`La propiedad "${propiedad.nombre}" permite fumar.`);
        } else {
            alert(`La propiedad "${propiedad.nombre}" no permite fumar.`);
        }

        if (propiedad.pets) {
            alert(`La propiedad "${propiedad.nombre}" permite mascotas.`);
        } else {
            alert(`La propiedad "${propiedad.nombre}" no permite mascotas.`);
        }
    });
}

// Mostrar las primeras 3 propiedades en la página principal
function mostrarPropiedadesIndex() {
    mostrarPropiedades('alquiler', 3);
    mostrarPropiedades('venta', 3);
}