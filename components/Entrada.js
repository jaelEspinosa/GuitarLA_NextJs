import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Entrada.module.css'


import {formatearFecha}from '../helpers'
const Entrada = ({entrada}) => {
  const{contenido, id, imagen, resumen, titulo, published_at} = entrada
  return (
    <article>

     <Image layout = 'responsive' width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`} priority='true'
         />
        <div className={styles.contenido}>         
           <h3>{titulo}</h3>
           <p className={styles.fecha}>{formatearFecha(published_at)}</p>
           <p className={styles.resumen}>{resumen}</p>
           <Link href={`/blog/${id}`}>
            <a className={styles.enlace}>Leer entrada</a>
           </Link>


        </div>
    

    
    </article>
  )
}

export default Entrada