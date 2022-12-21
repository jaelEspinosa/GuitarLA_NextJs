import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Image from 'next/image'
import { formatearFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'
import Link from 'next/link'
import { useEffect, useState } from "react"
import Spinner from "../../components/Spinner"


const EntradaBlog = ({ carrito }) => {
  
  const [entrada, setEntrada] = useState()
  const router = useRouter()
  const url = router.query.url 

  useEffect(() => {
    const getData = async ()=>{
          const urlBlogs = `${process.env.NEXT_PUBLIC_API_URL}/blogs/${url}`
          const respuesta = await fetch(urlBlogs)
          const resBlogs = await respuesta.json()
          
          setEntrada(resBlogs)
          
          
         }
    getData()
  
   
  }, [])
  
  
  if (!entrada) return <Spinner />
  console.log(entrada[0])
   return (
    
     <Layout 
     pagina={entrada[0].titulo}
     carrito={carrito}
     >
    <main className="contenedor">

      <h1 className="heading">{entrada[0].titulo}</h1>
      <article className={styles.entrada}>
        <Image layout="responsive" width={800} height={600} src={entrada[0].imagen.url}alt = {`imagen de ${entrada[0].titulo}`}></Image>
        <div className={styles.contenido}>
          <p className={styles.fecha}>{formatearFecha(entrada[0].published_at)}</p>
          <p className={styles.texto}>{entrada[0].contenido}</p>
        </div>
        <div className={styles.volver}>
          <Link  href='/blog'>volver atrás</Link>
        </div>
     </article>
      
      </main>
    </Layout>
  )
}

export default EntradaBlog