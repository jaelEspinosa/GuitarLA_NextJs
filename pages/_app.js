import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
const [carrito, setCarrito]=useState([])
const [busqueda, setBusqueda]=useState('')

useEffect(()=>{
const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
setCarrito(carritoLS)

},[]);

useEffect(()=>{
if (carrito.length !== 0){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}
},[carrito]);

  const agregarCarrito = producto =>{

     if (carrito.some(articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo =>{
        if(articulo.id === producto.id){
          articulo.cantidad = articulo.cantidad+producto.cantidad
        }
        return articulo
      })
    setCarrito(carritoActualizado)
     }else{
      
    setCarrito([...carrito, producto])

     }
    
  }

  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map(articulo =>{
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  } 

  const borrarRegistro = id => {
     const alerta = confirm('Seguro que quieres Borrar?')
     if (alerta){
      const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
      setCarrito(carritoActualizado)
      if (carrito.length <= 1){
        localStorage.clear()
      }
     
      
      
     }
     return
    }
    


  return <Component {...pageProps}
  setCarrito = { setCarrito }
  carrito = {carrito}
  agregarCarrito = {agregarCarrito}
  actualizarCantidad = {actualizarCantidad}
  borrarRegistro = {borrarRegistro}
  busqueda={busqueda}
  setBusqueda={setBusqueda}
   />
  
}

export default MyApp
