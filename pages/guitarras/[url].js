import Image from 'next/image'

import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/Layout'


import styles from '../../styles/guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {
    const{nombre, precio, imagen, url, descripcion,id}=guitarra[0]
    const[cantidad, setCantidad]=useState(1)
    const[addedCarrito, setAddedCarrito]=useState(false)
    const handlesubmit = e => {
      
      e.preventDefault()

      // agregarlo al carrito
      
      if (cantidad<1){
        alert('Cantidad no válida')
      }
      const guitarraSeleccionada = {
        id,
        imagen: imagen.url,
        nombre,
        precio,
        cantidad
      }

      agregarCarrito(guitarraSeleccionada)
      setAddedCarrito(true)
    }
    
  return (
      <Layout
      pagina = {`gitarra-${nombre}`}>
    <div className={styles.guitarra}>
      
    <Image layout='responsive' width={180} height={350} src = {imagen.url} alt = {`Imagen Guitarra ${nombre}`} />

    
    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>{precio}€</p>
        <form className={styles.formulario} onSubmit={handlesubmit}>
          <label>Cantidad:</label>
         <select value={cantidad}
         onChange={ e => setCantidad(parseInt(e.target.value))} >
            <option value='0'>--Seleccione--</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
        </select> 
        <input type='submit' value ='Agregar al Carrito'>

        </input>
      
        </form>
        {addedCarrito && <div className={styles.button}>
        <Link href='/tienda'>        
         <button>Seguir Comprando</button>
         </Link>
        <Link href='/carrito'>
          <button>Ir al Carrito</button> 
        </Link>

        </div>}
    
    </div>

  </div>
  </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    const urlGuitarra = `${process.env.API_URl}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
   

    return{
        props:{
           guitarra
          
        }
    }
}

export default Producto