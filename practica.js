// let contenedorPersons = document.querySelector(".divItems");

// fetch("https://rickandmortyapi.com/api/character")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.forEach((person) => {
//       const personDiv = document.createElement("div");
//       personDiv.textContent = person.name;
//       contenedorPersons.appendChild(personDiv);
//     });
//   });
// contenedorPersons.innerHTML = `
//     <h3>${person.name}</h3>
//     <h3>${person.status}</h3>
//     <h3>${person.species}</h3>`;

// bucle FOR
// for(let i = 0; i < 4; 1++){
//   console.log(i)
// }

// // bucle while
// let i = 3
// while(i < 10){
//   i ++;
//   console.log(i)
// }

const myObjcts = [
  { name: "jehan", id: 3222332, masculino: "true" },
  { city: "medellin", tel: 5734556444, ocupacion: "developer" },
  { estudios: "tecnico desarrollo de software", institucion: "politecnico" },
  { edad: 23, estadoCivil: "soltero", hijos: "false" },
];

const carrito = [];
// para mostrar todo my array de objetos con el metodo forEach
myObjcts.forEach((obj) => {
  myObjcts.comidaFavorita = "hamburguesa"; // agrego nuevo objeto a mi array

  carrito.push(myObjcts); // agrego array a mi variable carrito
  // console.log(obj);
  console.log(carrito);
});
