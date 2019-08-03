import { dataProduct } from '../controller/functions.js'

let array1 = [];
let array2 = [];
//aqui pintas el Storage: JSON.parseInt
const array1Order = (objproducto, ele) => {
  if(objproducto.datos.Tipo != undefined){
    let objeto = {
      name: objproducto.datos.Nombre +' '+ ele,
      price: objproducto.datos.Precio,
      id: objproducto.id
    }
    array1.push(objeto);
  } else {
    let objeto = {
      name: objproducto.datos.Nombre,
      price: objproducto.datos.Precio,
      id: objproducto.id
      }
      array1.push(objeto);
    };
//console.log(objetoLocalStorage);
//localStorage.setItem("orden", JSON.stringify(objetoLocalStorage));
 return array1;
}

const createButton = (objproducto) => {
    const createDiv = document.createElement("div");
    createDiv.id = 'div-add' + objproducto.id;
    const image = document.createElement('img');
    image.src = objproducto.datos.img;
    image.className = 'image';
    createDiv.appendChild(image);
    createDiv.className = "product col-3";
    const createButton = document.createElement("button");
    //console.log(createButton)
    createButton.div = objproducto.datos.Tipo;
    createButton.innerHTML = objproducto.datos.Nombre;
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    //console.log(img)
    createDiv.appendChild(createButton)
    createButton.addEventListener('click', (e)=>{
      const createBtn = e.target.id;
      //console.log(createBtn)
      //aqui pintas el Storage: JSON.parseInt
       switch (createBtn){  
        case ('s3XmdNPPmSKupPjBj5IQ'): 
        case ('HYLEqOtNeTj3sEzBtabZ'):
          //console.log(objproducto.datos.Adicional)
        const div = document.querySelector('#div-add'+ createBtn)    
        const createDiv = document.createElement('div');
        createDiv.id = createBtn; 
        (createButton.div).forEach(ele => {
          //res pollo y vegano
          const createBtnEle = document.createElement("button")
          createBtnEle.id=createBtn+ele;
          createBtnEle.innerHTML = ele;
          div.appendChild(createBtnEle)
          createBtnEle.addEventListener('click', () => {
            array1Order(objproducto)
            array2.push(objproducto.datos.Precio)
            const total = document.querySelector('#total');
            total.innerHTML = suma(array2)
            div.innerHTML = '';
       products.innerHTML += 
      `<div id="removeProduct"> 
      <li><input type="checkbox"/> <p> ${objproducto.datos.Nombre} de ${ele} ${objproducto.datos.Precio} <a id="remove-${createBtnEle.id}"><img src="./image/delete-button.png"/></a></li> 
      </div>`;  
          })    
         })
         const arrayAdic = objproducto.datos.Adicional;
          arrayAdic.forEach(elem => {
            //queso y huevo
            const btnAdicional = document.createElement('button')
            btnAdicional.id = 'btnAdicional'+elem.nombre;
            btnAdicional.innerHTML += `${elem.nombre}`;
            div.appendChild(btnAdicional)
            btnAdicional.addEventListener('click', () => {
              console.log(elem.precio)
              array2.push(elem.precio)
              const precioAdic = elem.precio;
              products.innerHTML += `${elem.nombre}`;
              const total = document.querySelector('#total');
              total.innerHTML = suma(array2)
            })
          })
         break;
      default: 
     array1Order(objproducto)
      //const prodSelec = createButton.precio;
      //console.log(array1)
      array2.push(objproducto.datos.Precio)
    const total = document.querySelector('#total');
    total.innerHTML = suma(array2)
    //console.log(array2)
      //console.log(array1)
      products.innerHTML += `<div id="removeProduct"> 
      <li id="removeLi"><input type="checkbox"/> ${objproducto.datos.Nombre} ${objproducto.datos.Precio} <a id="remove-${objproducto.id}"><img src="./image/delete-button.png"/></a></li> 
      </div> `;  
      //array1.push(prodSelec);            
     // const removeProduct = document.querySelector('#removeProduct')
      //const removeLi = document.querySelector('#removeLi')
      //localStorage.setItem( "Pedido", JSON.stringify(array1)) 
      /*const remove = document.querySelector(`#remove-${objproducto.id}`)
      remove.addEventListener('click', () => {
        removeProduct.removeChild(removeLi)
      })*/
      break;
    } 
    })
    return createDiv;
}

const suma = (arr) => {
    let acum = 0;
    arr.forEach(elemento => {
      acum = acum + elemento;
    })
    return acum;
}

export default () => {
    const createDiv = document.createElement('div');
    const order = `
    <section class="col-12">
    <header>
    <h1 class="burgerTitulo"> BURGER QUEEN </h1>
    </header>
    <section class="col-6">
        <button id="btn-desayuno" class="col-6"> Desayuno </button>
        <button id="btn-ac" class="col-6"> Almuerzo y cena </button>
        <div id="contenido" class="col-12"> </div>
    </section>
    <section class="col-6">
        <p class=""> Nombre del cliente: <input id="nombre" type="text" name="nombre" class="mesa" required> </p>
        <p class=""> N° de mesa: <input id="mesa" type="number" name="nombre" class="mesa" required> </p>  
        <section class="col-12"> 
           <button class="productos col-md-4"> Cantidad </button>
           <button class="productos col-md-4"> Productos </button>
           <button class="productos col-4"> Precio </button>
           <div id="products" class="col-12"></div>
        </div>
        <h1> Total S/ <p id="total"> </p> <h1> 
        <button id="enviar"> ENVIAR </button> 
         </section>
    </section>
    </section>
    `;
    createDiv.innerHTML = order;
  
    //const contenido = document.querySelector("#contenido")
    const btnDesayuno = createDiv.querySelector('#btn-desayuno');
    btnDesayuno.addEventListener('click', () => {
        dataProduct("Desayuno")
        .then(res => {
           //  console.log(res)
             const arrayAc = res;
             contenido.innerHTML='';
             arrayAc.forEach(element => {
               contenido.appendChild(createButton(element))
             //  console.log(createButton(element.datos.Nombre, element.id))
             })
          })
//total.innerHTML = suma(array1)
       })

    const btnAc = createDiv.querySelector('#btn-ac')
    btnAc.addEventListener('click', () => {
     dataProduct("Almuerzo y cena")
     .then(res => {
         //console.log(res)
          const arrayAc = res;
          contenido.innerHTML='';
          arrayAc.forEach(element => {
            contenido.appendChild(createButton(element))
       })
    })
  })

   const nombre = createDiv.querySelector('#nombre')
   nombre.addEventListener('click', () => {
     console.log('hola soy nombre')
   })

   const mesa = createDiv.querySelector('#mesa')
   mesa.addEventListener('click', () => {
     console.log('mesa')
   })

   const enviar = createDiv.querySelector('#enviar')
   enviar.addEventListener('click', () => {
     console.log('Hola')
   })

  return createDiv;
  }