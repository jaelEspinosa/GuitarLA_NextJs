
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BlogInicio from '../components/BlogInicio'
import Curso from '../components/Curso'

import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Spinner from '../components/Spinner'




export default function Home({ carrito, busqueda, setBusqueda, setCarrito }){

const router = useRouter()  

useEffect(() => {
 if (router.query.q === 'finalizado'){
  
  setCarrito([])
 }

 
}, [])

const [guitarras, setGuitarras] = useState([])
const [curso, setCurso] = useState()
const [entradas, setEntradas] = useState([])
const [cursosBuscador, setCursosBuscador] = useState([])
const [guitarrasBuscador, setGuitarrasBuscador] = useState([])

const getData = async ()=>{

  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`
  const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursos` 
  const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3` 
  const urlGuitarrasBuscador = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`
  const urlCursosBuscador = `${process.env.NEXT_PUBLIC_API_URL}/cursosguitarras`


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

    setGuitarras(guitarras.slice(0, 6))
    setCurso(curso)
    setEntradas(entradas)
    setCursosBuscador(cursosBuscador)
    setGuitarrasBuscador(guitarrasBuscador)
}

  useEffect(() => {
    getData()
  
  }, [])
  
  if(!guitarras[3])return <Spinner />    
  return (

     <Layout
     pagina = 'Incio'
     guitarra={guitarras[3]}
     carrito={carrito}
     cursosBuscador={cursosBuscador}
     guitarrasBuscador={guitarrasBuscador}
     busqueda={busqueda}
     setBusqueda={setBusqueda}
    
  >

     <main className='contenedor'>
        <h1 className='heading'>Destacadas</h1>
    <Listado
    guitarras = {guitarras}
    
     />


     </main>
      <Curso curso = {curso[0]}/>
    
     <BlogInicio entradas={entradas}/>
     </Layout>
     
    
  )
}

