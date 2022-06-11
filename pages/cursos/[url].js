import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Cursos.module.css'

const CursosGuitarraDetalle = ({curso}) => {
   const {titulo, descripcion, precio, imagen, url} = curso[0]
  return (
      <Layout pagina = {titulo}>
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
                <input type='submit' value ='Agregar al Carrito'></input>
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