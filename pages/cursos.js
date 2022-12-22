import { useEffect, useState } from "react"
import CursoCard from "../components/CursoCard"
import Layout from "../components/Layout"
import Spinner from "../components/Spinner"
import styles from '../styles/Cursos.module.css'

const Cursos = ({carrito, }) => {

const [cursos, setCursos] = useState()

  const getData = async()=>{
    const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursosguitarras`
    const resultado = await fetch(urlCursos)
    const rescursos = await resultado.json()
    setCursos(rescursos)
 
  }  
 
  useEffect(() => {
    getData()
    
  }, [])
  
  if(!cursos) return <Spinner />

  return (
      <Layout 
      pagina = 'Cursos'
      carrito={carrito}
      
      >
      <main>
         <h2 className="heading">Cursos Disponibles</h2>
         <div className={`contenedor ${styles.cursos}`}>
         {cursos?.map (curso =>(
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

/* export async function getServerSideProps(){

    const urlCursos = `${process.env.API_URL}/cursosguitarras`
    const resultado = await fetch(urlCursos)
    const cursos = await resultado.json()
    

    return {
        props:{
            cursos
        }
    }
} */

export default Cursos