import { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Spinner from '../components/Spinner'
import styles from '../styles/Tienda.module.css'

const Tienda = ({ carrito }) => {
 const [guitarras, setGuitarras]=useState([])
 
 const [cargando, setCargando]=useState(false)
 

 const ordenarPorPrecio = ( valor )=>{
    const guitarrasOrdenadas = []
    setCargando(true)
    switch(valor){
            
        case 'mayorAMenor':
               guitarrasOrdenadas = guitarras.sort((a,b)=> b.precio - a.precio);
               
          break;
        case 'menorAMayor':
               guitarrasOrdenadas = guitarras.sort((a,b)=> a.precio - b.precio); 
               

          break;
        case 'nombreAz':
               guitarrasOrdenadas =guitarras.sort((a,b)=> a.nombre.localeCompare( b.nombre )); 
               

          break;   
        case 'nombreZa':
               guitarrasOrdenadas = guitarras.sort((a,b)=> b.nombre.localeCompare( a.nombre ));
           

          break; 

        
      } 
      setGuitarras( guitarrasOrdenadas )  
      setTimeout(() => {
        setCargando(false)
      }, 200);
      
    };

  useEffect(()=>{
      setCargando(true)
       obtenerDatos()
       
     },[]);

  const obtenerDatos = async ()=>{
      const urlGuitar = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?` 
      const respuesta = await fetch(urlGuitar)
      const guitarrasApi = await respuesta.json()
      setGuitarras(guitarrasApi)
      setCargando(false)
    }


 
  
  return (
    <Layout
    pagina='Tienda'
    carrito={carrito}
    
    >
   {cargando ? <Spinner/> : 
      <main className='contenedor'>
           <h1 className='heading'>Nuestra Colección</h1>
           <select className={styles.select} onChange={e => ordenarPorPrecio(e.target.value)}>
             <option value=''>Ordenar por-</option>
             <option value='mayorAMenor'>Precio de mayor a menor</option>
             <option value='menorAMayor'>Precio de menor  a mayor</option>
             <option value='nombreAz'>Nombre A a Z</option>
             <option value='nombreZa'>Nombre Z a A</option>
           </select>
           <Listado guitarras = { guitarras }/>
      </main>} 

    
    </Layout>
  )
}

// peticion hecha con useEffect para poder poner el select para ordenar//

/* export async function getServerSideProps(){
  const urlGuitar = `${process.env.API_URL}/guitarras?${ordenarPorPrecio()}`
  
  const respuesta = await fetch(urlGuitar)
  const guitarras = await respuesta.json()

  return {
    props:{
      guitarras
    }
  }
} */


export default Tienda