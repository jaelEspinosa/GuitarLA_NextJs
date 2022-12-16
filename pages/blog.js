
import { useEffect, useState } from 'react'
import Entrada from '../components/Entrada'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import styles from '../styles/Blog.module.css'

const Blog = ({ carrito }) => {
 const [entradas, setEntradas] = useState()

 const getData = async()=>{
    const urlEntradas = `${process.env.NEXT_PUBLIC_API_URL}/blogs`
    const resultado = await fetch(urlEntradas)
    const resEntradas = await resultado.json()
    setEntradas(resEntradas)
 
  }  
 
  useEffect(() => {
    getData()
    
  }, [])   
  if(!entradas) return <Spinner />
  return (
    <Layout
    pagina='Blog'
    carrito={carrito}
    >
    <main>
        <h2 className='heading'>Blog</h2>        

        <div className= {`contenedor ${styles.blog}`}>
          {entradas.map (entrada =>(
            <Entrada
              key={entrada.id}
              entrada={entrada}
            />
          ))}
             
          
        </div>
    </main>

    
    </Layout>
  )
}

/* export async function getServerSideProps(){

  const url = `${process.env.API_URL}/blogs`
  const respuesta =  await fetch(url)
  const entradas =  await respuesta.json()
 
  return {
    props:{
      entradas
    }
  }
} */


export default Blog