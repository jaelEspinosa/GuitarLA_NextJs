import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'


import styles from '../../styles/Guitarra.module.css'

const Producto = ({ agregarCarrito, carrito }) => {

    /* const{nombre, precio, imagen, url, descripcion,id}=guitarra[0] */
    const[cantidad, setCantidad]=useState(1)
    const[addedCarrito, setAddedCarrito]=useState(false)
    const [guitarra, setGuitarra] = useState()
    const router = useRouter()
    const url = router.query.url 
    
    useEffect(() => {
      const getData = async ()=>{
            const urlCurso = `${process.env.NEXT_PUBLIC_API_URL}/guitarras/${url}`
            const respuesta = await fetch(urlCurso)
            const resGuitarra = await respuesta.json()
            
            setGuitarra(resGuitarra)
            
            
           }
      getData()
    
     
    }, [])

    const handlesubmit = e => {
          e.preventDefault()
      // agregarlo al carrito
   
      if (cantidad<1){
        alert('Cantidad no válida')
      }
      const guitarraSeleccionada = {
        id:guitarra[0].id,
        imagen: guitarra[0].imagen.url,
        nombre: guitarra[0].nombre,
        precio: guitarra[0].precio,
        cantidad
      }

      agregarCarrito(guitarraSeleccionada)
      setAddedCarrito(true)
    }
  if (!guitarra) return <Spinner /> 
  return (
      <Layout
      pagina = {`gitarra-${guitarra[0].nombre}`}
      carrito={carrito}>
    <div className={styles.guitarra}>
      
    <Image layout='responsive' width={180} height={350} src = {guitarra[0].imagen.url} alt = {`Imagen Guitarra ${guitarra[0].nombre}`} />

    
    <div className={styles.contenido}>
      <h3>{guitarra[0].nombre}</h3>
      <p className={styles.descripcion}>{guitarra[0].descripcion}</p>
      <p className={styles.precio}>{guitarra[0].precio}€</p>
        <form className={styles.formulario} onSubmit={handlesubmit}>
        {!addedCarrito ?
          <>
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
        </>  
        : <p className={styles.agregado}>¡Agregado al carrito!</p>}
      
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

/* export async function getServerSideProps({query:{url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
   

    return{
        props:{
           guitarra
          
        }
    }
} */

export default Producto