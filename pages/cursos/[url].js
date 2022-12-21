import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Cursos.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Spinner from '../../components/Spinner'

const CursosGuitarraDetalle = ({carrito, agregarCarrito}) => {
   
   const [curso, setCurso] = useState()  
   const router = useRouter()
   const url = router.query.url 

useEffect(() => {
  const getData = async ()=>{
        const urlCurso = `${process.env.NEXT_PUBLIC_API_URL}/cursosguitarras/${url}`
        const respuesta = await fetch(urlCurso)
        const rescurso = await respuesta.json()
        
        setCurso(rescurso)
        
        
       }
  getData()

 
}, [])
   
   console.log('el curso....', curso)
   const[addedCarrito, setAddedCarrito]=useState(false)
   
   


   const llenarCarrito = ()=>{
    
    const cursoSeleccionado = {
        id: curso[0].id,
        imagen : curso[0].imagen.url,
        titulo: curso[0].titulo,
        precio: curso[0].precio,
        cantidad:1

    }
    agregarCarrito(cursoSeleccionado)
    setAddedCarrito(true)
   }
  
   if (!curso)  return <Spinner/>
   
   
   return (
   
    
      
      <Layout
       pagina = {curso[0].titulo}
       carrito={carrito}
       >
      <main className='contenedor'>
       <h1 className='heading'>{curso[0].titulo}</h1>
      <article className={styles.cursoguit}>
            <Image layout='responsive' width={300} height={180} 
            src={curso[0].imagen.url} alt={`imagen ${curso[0].titulo}`}
            />
        <div>
            <p>{curso[0].descripcion}</p>
            <div className={styles.contprecio}>
                <p className={styles.precio}>{curso[0].precio} €</p>   
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


/* export async function getServerSideProps({query:{url}}){
    const urlCurso = `${process.env.API_URL}/cursosguitarras?url=${url}`
    const respuesta = await fetch(urlCurso)
    const curso = await respuesta.json()
   

    return{
        props:{
           curso
          
        }
    }
} */

export default CursosGuitarraDetalle