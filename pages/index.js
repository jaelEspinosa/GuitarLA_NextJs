
import BlogInicio from '../components/BlogInicio'
import Curso from '../components/Curso'

import Layout from '../components/Layout'
import Listado from '../components/Listado'



export default function Home( {guitarras,curso,entradas,carrito}) {
  
  return (
    
     
     <Layout
     pagina = 'Incio'
     guitarra={guitarras[3]}
     carrito={carrito}>
     <main className='contenedor'>
        <h1 className='heading'>Destacadas</h1>
    <Listado
    guitarras = {guitarras}
     />


     </main>
     <Curso curso = {curso}/>
    
     <BlogInicio entradas={entradas}/>
     </Layout>
      
    
  )
}

//multiples peticiones a la vez en paralelo a la api

export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`
  const urlCursos = `${process.env.API_URL}/cursos` 
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3` 


  const [resGuitarras, resCursos, resBlog]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])
  
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()

  ])
  return {
    props:{
      guitarras,
      curso,
      entradas
    }
  }
}