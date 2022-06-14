
import Entrada from '../components/Entrada'
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas,carrito}) => {
   
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
              key={entrada._id}
              entrada={entrada}
            />
          ))}
             
          
        </div>
    </main>

    
    </Layout>
  )
}

export async function getServerSideProps(){

  const url = `${process.env.API_URL}/blogs`
  const respuesta =  await fetch(url)
  const entradas =  await respuesta.json()
 
  return {
    props:{
      entradas
    }
  }
}


export default Blog