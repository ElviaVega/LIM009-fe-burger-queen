import { dataProduct } from '../controller/functions.js'

let array1 = [];
//let array2 = [];

const createButton = (objproducto) => {
  //console.log(objproducto)
    const createDiv = document.createElement("div");
    createDiv.id = 'div-add' + objproducto.id;
   // console.log(createDiv.id)
    createDiv.className = "product col-3";
    const createButton = document.createElement("button");
    createButton.div = objproducto.datos.Tipo;
    createButton.innerHTML = objproducto.datos.Nombre;
    createButton.id = objproducto.id;
    createButton.precio = objproducto.datos.Precio;
    createDiv.appendChild(createButton)
    createButton.addEventListener('click', (e)=>{
     const createBtn = e.target.id;
    console.log(createBtn)
       switch (createBtn){  
        case ('s3XmdNPPmSKupPjBj5IQ'): 
        case ('HYLEqOtNeTj3sEzBtabZ'):
          const div = document.querySelector('#div-add'+ createBtn)
          category(div, createBtn)
        const createDiv = document.createElement('div');
        createDiv.id = createBtn; 
        (createButton.div).forEach(ele => {
        //console.log(ele)
        const createBtnEle = document.createElement("button")
        createBtnEle.id=createBtn+ele;
        createBtnEle.innerHTML = ele;
        //createBtnEle.className = "btnEle col-3";
        console.log(createBtnEle.id)
        div.appendChild(createBtnEle)
        createBtnEle.addEventListener('click', () => {
        const prodSelec = createButton.precio;
      products.innerHTML +=
      `<div id="removeProduct"> 
      <li><input type="checkbox"/> <p> ${objproducto.datos.Nombre} de ${ele} ${objproducto.datos.Precio} <a id="remove-${createBtnEle.id}"><img src="./image/delete-button.png"/></a></li> 
      </div>`;  
      array1.push(prodSelec);
      const total = document.querySelector('#total');
      const removeProduct = document.querySelector('#removeProduct')
      total.innerHTML = suma(array1)
      localStorage.setItem( "Pedido", JSON.stringify(array1))
      const remove = document.querySelector(`#remove-${createBtnEle.id}`)
      remove.addEventListener('click', () => {
        removeProduct.removeChild(total)
      })
          })    
         })
         break;
      default: 
     const prodSelec = createButton.precio;
      //const prodSelec = createBtn;
      //console.log(objproducto.id)
      products.innerHTML += `<div id="removeProduct"> 
      <li id="removeLi"><input type="checkbox"/> ${objproducto.datos.Nombre} ${objproducto.datos.Precio} <a id="remove-${objproducto.id}"><img src="./image/delete-button.png"/></a></li> 
      </div> `;  
      array1.push(prodSelec);
      const total = document.querySelector('#total');
      const removeProduct = document.querySelector('#removeProduct')
      const removeLi = document.querySelector('#removeLi')
      total.innerHTML = suma(array1)
      localStorage.setItem( "Pedido", JSON.stringify(array1)) 
      const remove = document.querySelector(`#remove-${objproducto.id}`)
      remove.addEventListener('click', () => {
        removeProduct.removeChild(removeLi)
      })
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

const category = (div, idButton) => {
    dataProduct("Adicional")
     .then(res1 => {
      //console.log(res1)
      const arrayA = res1;
      arrayA.forEach(elem => {
        const opcion = elem.datos.Opción;
        const precio = elem.datos.Precio;
      opcion.forEach(opc => {
       //  console.log(opc)
       // const createDivo = document.createElement('div');
        const buttonAdicional = document.createElement('button');
        buttonAdicional.id = idButton+opc;
       //console.log(buttonAdicional.id)
       buttonAdicional.innerHTML = opc;
       console.log(buttonAdicional.innerHTML)
       div.appendChild(buttonAdicional)
       buttonAdicional.addEventListener('click', () => {
        console.log('soy huevo y queso')  
       array1.push(precio)
       })
        })
       })
      })
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

  return createDiv;
  }