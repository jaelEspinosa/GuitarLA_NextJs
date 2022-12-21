import styles from '../styles/Curso.module.css'
import Link from 'next/link'

const Curso = ({ curso }) => {
    const { titulo,descripcion, imagen } = curso
  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{descripcion}</p>
                <Link className={styles.enlace} href='/cursos'>
                
                <p className={styles.enlace}>Más información</p>
                
                </Link>
            </div>
        </div>

       <style jsx>{`
          section{
              padding : 10rem 0;
              margin-top: 10rem;
              background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.600)), url(${imagen.url});
              background-size:cover;
              background-position:50%;
          }
       `}</style>
    </section>
  )
}

export default Curso