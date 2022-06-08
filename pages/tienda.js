import { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import styles from '../styles/Tienda.module.css'

const Tienda = () => {
 const [guitarras, setGuitarras]=useState([])
 const [ordenar, setOrdenar]=useState('_sort=nombre')
 
 
 const ordenarPorPrecio = (valor)=>{
// valores del select para pedir a la API con el orden deseado
switch(valor){
  case 'mayorAMenor':
    setOrdenar('_sort=precio:desc')
    break;
  case 'menorAMayor':
    setOrdenar('_sort=precio:ASC') 
    break;
  case 'nombreAz':
    setOrdenar('_sort=nombre')
    break;   
  case 'nombreZa':
    setOrdenar('_sort=nombre:desc')
    break;  
  }
    
}

 useEffect(()=>{
    const obtenerDatos = async ()=>{
    const urlGuitar = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?${ordenar}` // aplicamos el orden en la url con el operador de strapi
    const respuesta = await fetch(urlGuitar)
    const guitarrasApi = await respuesta.json()
    setGuitarras(guitarrasApi)
   }
   obtenerDatos()
 },[ordenar])   // cada vez que cambia el state de ordenar se vuelve a renderizar la pagina ordenada
 
  
  return (
    <Layout
    pagina='Tienda'
    >
      <main className='contenedor'>
           <h1 className='heading'>Nuestra Colección</h1>
           <select className={styles.select} onChange={e=>ordenarPorPrecio(e.target.value)}>
             <option value=''>Ordenar por-</option>
             <option value='mayorAMenor'>Precio de mayor a menor</option>
             <option value='menorAMayor'>Precio de menor  a mayor</option>
             <option value='nombreAz'>Nombre A a Z</option>
             <option value='nombreZa'>Nombre Z a A</option>
           </select>
           <Listado guitarras = {guitarras}/>
      </main>

    
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