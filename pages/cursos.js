import CursoCard from "../components/CursoCard"
import Layout from "../components/Layout"
import styles from '../styles/Cursos.module.css'

const Cursos = ({cursos,carrito}) => {
    
  return (
      <Layout 
      pagina = 'Cursos'
      carrito={carrito}>
      <main>
         <h2 className="heading">Cursos Disponibles</h2>
         <div className={`contenedor ${styles.cursos}`}>
         {cursos.map (curso =>(
             <CursoCard 
                 key = {curso.id}
                 curso={curso}
             />
         ))}

         </div>

      </main>
           
      </Layout>
  )
}

export async function getServerSideProps(){

    const urlCursos = `${process.env.API_URL}/cursosguitarras`
    const resultado = await fetch(urlCursos)
    const cursos = await resultado.json()
    

    return {
        props:{
            cursos
        }
    }
}

export default Cursos