import React from 'react'
import Entrada from './Entrada'
import styles from '../styles/Blog.module.css'

const BlogInicio = ({entradas}) => {
  return (
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
  )
}

export default BlogInicio