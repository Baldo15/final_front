// window.addEventListener("DOMContentLoaded", () => {
//     console.log("hola");
  
//     const nombre = document.getElementById("nombre");
//     const talla = document.getElementById("talla");
//     const precio = document.getElementById("precio");
//     const boton = document.querySelector("#btnAgregar");
//     const contenedor = document.getElementById("tabla_agregados");
//     const allInputs = document.querySelectorAll("input");
//     const botonEliminar = document.querySelector("#btnEliminar");
//     const prodContainer = document.getElementById("tabla_productos");
    
  
//     allInputs.forEach((input) => {
//       input.addEventListener("input", () => {
//         if (input.value === "") {
//           input.classList.add("is-invalid");
//           input.classList.remove("valid");
//         } else {
//           input.classList.remove("is-invalid");
//           input.classList.add("is-valid");
         
//         }
//       });
//     });
   
  
//     boton.addEventListener("click", (event) => {
//       event.preventDefault();
  
//       const valorNombre = nombre.value;
//       const valorTalla = talla.value;
//       const valorPrecio = precio.value;
  
//       if (valorNombre === "") {
//         nombre.classList.add("is-invalid");
//       } else {
//         nombre.classList.remove("is-invalid");
//       }
  
//       if (valorPrecio === "") {
//         precio.classList.add("is-invalid");
//       } else {
//         precio.classList.remove("is-invalid");
//       }
  
//       if (valorTalla === "") {
//         talla.classList.add("is-invalid");
//       } else {
//         talla.classList.remove("is-invalid");
//       }
  
//       if (valorNombre !== "" && valorPrecio !== "" && valorPrecio !== "") {
       
//         const imageSrc = document.getElementById("opciones").value;
//         const addItem = true;
//         // como se maneja tablas, en esta se ag"rega una fila nueva
//         const nuevaFila = contenedor.insertRow();
        
//         // se crean las celdas en la fila nueva
//         const celdaNombre = nuevaFila.insertCell(0);
//         const celdaTalla = nuevaFila.insertCell(1);
//         const celdaPrecio = nuevaFila.insertCell(2);
//         const button = nuevaFila.insertCell(3)
//         // agregamos el valor de los campos a cada celda
//         celdaNombre.innerHTML = valorNombre;
//         celdaTalla.innerHTML = valorTalla;
//         celdaPrecio.innerHTML = valorPrecio;
//         button.innerHTML = `<button class="btn btn-outline-danger" onclick="myFunction()">X</button>`
//         nombre.value = "";
//         talla.value = "";
//         precio.value = "";
  
//         const fila = prodContainer.insertRow();
//         const celdaDetalle = fila.insertCell(0)
//         celdaDetalle.innerHTML =`
//               <div class="juntify-content-center" style="padding:20px;">
//               <img src="${imageSrc}" alt="Los Angeles" class="d-block" style="width:30%">
  
//               <p>Nombre: ${valorNombre}<br>
//               Talla: ${valorTalla}<br>
//               Precio: $ ${valorPrecio}</p>
//                </div
//               `;
  
//          const celdaDelete = fila.insertCell(1);
//          celdaDelete.innerHTML = `<button class="btn btn-outline-danger" onclick="myFunction()">X</button>`
//       }
//     });
  
//   });
  
  function validarEdad() {
    event.preventDefault();
    const nombre= $("#nombre").val();
    const apellido= $("#apellido").val();
    const tipo= $("#tipo_identificacion").val();
    const identificacion= $("#identificacion").val();
    const fecha= $("#fecha_nacimiento").val();
    const lugar= $("#lugar_nacimiento").val();
    console.log(identificacion);
    if(nombre != '' && apellido != '' && identificacion != '' && lugar != '' )
    {
        $("#formulario").remove();
        const fechaNacimiento = new Date(fecha);
        const fechaActual = new Date();
        const diferenciaMilisegundos = fechaActual - fechaNacimiento;
        const edad = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
        console.log("entra")
        if(edad >= '6' && edad <= '19')
        {
            if(edad >= '6' && edad <= '8')
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA PONYS!');
            }else if(edad >= '9' && edad <= '11')
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA PREINFANTIL!');
            }else if(edad >= '12' && edad <= '14')
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA INFANTIL!');
            }else if(edad >= '14' && edad <= '15')
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA PREJUVENIL!');
            }else if(edad >= '16' && edad <= '17')
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA JUVENIL!');
            }else
            {
                alert('!FELICIDADES '+nombre+' '+apellido+' USTED A QUEDADO EN LA CATEGORIA SUB19!');
            }
        }else{
            alert('!SU EDAD NO ESTA EN EL RANGO DE NUESTRAS CATEGORIAS!');
        }
        
    }
  }