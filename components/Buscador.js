import { useEffect, useState } from 'react'
import Image from "next/image"
import styles from '../styles/Buscador.module.css'
import { datosFiltrados } from '../helpers'
import Link from 'next/link'

const Buscador = ({busqueda,
                 guitarrasBuscador,
                 cursosBuscador,
                 setBusqueda
                 }) => {

  const [resultado, setResultado]=useState([])

  useEffect(()=>{
      const obtenerDatos = ()=>{
       setResultado(datosFiltrados(guitarrasBuscador,cursosBuscador,busqueda))
      }
    obtenerDatos()
     
  },[busqueda])
  

  return (
    <div className={styles.contBuscador}>
         <h4>RESULTADOS</h4>
         <div className={styles.cerrar}>
                <Image
                layout='fixed' 
                width={30}
                height={30}
                src='/img/boton-cerrar.png'
                alt='cerrar'  
                onClick={()=>setBusqueda('')}
                />
                </div>
        {resultado.map(item=>(
          
          <div  className={styles.cardBuscador} key = {item.id}>
              
                {item.titulo ?  <Image layout='fixed' width={50} height={50} src={item.imagen.url} alt='imagen guitarra curso'></Image>:
                <Image layout='fixed' width={30} height={50} src={item.imagen.url} alt='imagen guitarra curso'></Image>}
              
            
            <p>{item.nombre}{item.titulo}</p>
            
           {item.nombre && <Link href={`/guitarras/${item.url}`}>
            <p onClick={()=>setBusqueda('')} className={styles.enlace}>Ver</p>
             
            </Link>}
            {item.titulo &&<Link href={`/cursos/${item.url}`}>
            <p onClick={()=>setBusqueda('')} className={styles.enlace}>Ver</p>
             
            </Link> }
           
         
          </div>
          
        ))}
    </div>
  )
}
 



export default Buscador