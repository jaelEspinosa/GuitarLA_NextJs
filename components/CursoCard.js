import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Cursos.module.css'

const CursoCard = ({curso}) => {
  const {titulo, descripcion, imagen, url, id, precio}=curso
  return (
    <article>
    <Image layout='responsive' 
    width={800} height={600} src={imagen.url} 
    alt={`imagen ${titulo}`}/>

    <div className={styles.contenido}>
    <h3>{titulo}</h3>
    <p className={styles.resumen}>{descripcion}</p>
    <p className={styles.precio}>{precio} €</p>
    <Link href={`/cursos/${url}`}>
        <a className={styles.enlace}>Detalle del Curso</a>
    </Link>

    </div>

    </article>
  )
}

export default CursoCard