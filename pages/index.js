
import BlogInicio from '../components/BlogInicio'
import Curso from '../components/Curso'

import Layout from '../components/Layout'
import Listado from '../components/Listado'



export default function Home( {guitarras,
                  curso,
                  entradas,
                  carrito,
                  cursosBuscador,
                  guitarrasBuscador,
                  busqueda,
                  setBusqueda}) 
    {   
  return (
    
     
     <Layout
     pagina = 'Incio'
     guitarra={guitarras[3]}
     carrito={carrito}
     cursosBuscador={cursosBuscador}
     guitarrasBuscador={guitarrasBuscador}
     busqueda={busqueda}
     setBusqueda={setBusqueda}>

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
  const urlGuitarrasBuscador = `${process.env.API_URL}/guitarras`
  const urlCursosBuscador = `${process.env.API_URL}/cursosguitarras`


  const [resGuitarras, resCursos, resBlog, resCursosBuscador, resGuitarrasBuscador]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
    fetch(urlCursosBuscador),
    fetch(urlGuitarrasBuscador)
  ])
  
  const [guitarras, curso, entradas, cursosBuscador, guitarrasBuscador] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
    resCursosBuscador.json(),
    resGuitarrasBuscador.json()
    

  ])
  return {
    props:{
      guitarras,
      curso,
      entradas,
      cursosBuscador,
      guitarrasBuscador
    }
  }
}