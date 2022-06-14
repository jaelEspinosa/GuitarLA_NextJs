import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Cursos.module.css'
import Link from 'next/link'

const CursosGuitarraDetalle = ({curso,carrito, agregarCarrito}) => {
   const {titulo, descripcion, precio, imagen, url, id} = curso[0]
   const[addedCarrito, setAddedCarrito]=useState(false)
   
   
   const llenarCarrito = ()=>{
    
    const cursoSeleccionado = {
        id,
        imagen : imagen.url,
        titulo,
        precio,
        cantidad:1

    }
    agregarCarrito(cursoSeleccionado)
    setAddedCarrito(true)
   }
  
   return (
      
      <Layout
       pagina = {titulo}
       carrito={carrito}
       >
      <main className='contenedor'>
       <h1 className='heading'>{titulo}</h1>
      <article className={styles.cursoguit}>
            <Image layout='responsive' width={300} height={180} 
            src={imagen.url} alt={`imagen ${titulo}`}
            />
        <div>
            <p>{descripcion}</p>
            <div className={styles.contprecio}>
                <p className={styles.precio}>{precio} €</p>   
               {!addedCarrito ? <input onClick={()=>llenarCarrito()} type='submit' value ='Agregar al Carrito'></input> 
               : <p className={styles.agregado}>¡Agregado al carrito!</p>}
              
               {addedCarrito && <div className={styles.button}>
                <Link href='/cursos'>        
                <button>Seguir Comprando</button>
                </Link>
                <Link href='/carrito'>
                <button>Ir al Carrito</button> 
                </Link>
               </div>}
            </div>
        </div>  
       
      </article>
      
      </main>
           
 
      </Layout>
      )
}


export async function getServerSideProps({query:{url}}){
    const urlCurso = `${process.env.API_URl}/cursosguitarras?url=${url}`
    const respuesta = await fetch(urlCurso)
    const curso = await respuesta.json()
   

    return{
        props:{
           curso
          
        }
    }
}

export default CursosGuitarraDetalle