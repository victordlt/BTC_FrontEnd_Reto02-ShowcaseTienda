
//DB Lista de Precios-----------------------
var listaPrecios=[
  {producto: "Cola", Precio : 2.5},
  {producto: "Sparkling", Precio : 5.5},
  {producto: "Energy", Precio : 3.5},
  {producto: "FreshLime", Precio : 2.1},
  {producto: "SweetPineapple", Precio : 1.5},
  {producto: "JungleDrink", Precio : 2.4},
  {producto: "Coconut", Precio : 2.6},
  {producto: "Soda", Precio : 1.7}
]
//Clase Producto en Cesta
class Product{
  constructor(ProdId,ProdName){
    this.id=ProdId;
    this.Name=ProdName;
    this.Price=0;
  }

  getMyPrice(){
    for(var i = 0; i<listaPrecios.length ; i++)
    {
      if(this.Name === listaPrecios[i].producto)
      {
          this.Price = listaPrecios[i].Precio;
      }
    }
  }
}

//Clase CajaUI--------------------------
class CajaUI{
  addProduct(producto){
    let tabla = document.querySelector("#ListaProductos > tbody"); 
    //tabla.innerHTML
    tabla.innerHTML= `
      <tr>
          <td><button class="delete"></button></td> 
          <td>${producto.Name}</td>
          <td>${producto.Price}</td>
          <td>01</td>
      </tr>`
  }
  deleteProduct(){

  }
  sumaTotal(){

  }
}


//DOM Event-Functions----------------------------
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function allowDrop(ev) {
    ev.preventDefault();
  }  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).style.visibility="hidden";
    
    const idProduct=document.getElementById(data).id;// id del producto arrastrado
    const NameProduct=document.getElementById(data).className;// nombre producto arrastrado
    const Prod = new Product (idProduct, NameProduct); //creo el producto arrastrado
    Prod.getMyPrice();// Busco el precio del producto arrastrado en la lista de precios
    
        console.log(Prod);

    //Renderizar el producto arrastrado en el Cajero (carrito de compras)
    const UICaja = new CajaUI;
    UICaja.addProduct(Prod);
  }

//DOM Event Handlers-------------------------------

