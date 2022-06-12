import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito}) => {
    console.log('El carrito contiene..',carrito)
  return (
      <Layout pagina = {'carrito de compra'}>

    <h2 className='heading'>Carrito</h2>
      <main className={`contenedor ${styles.contenido}`}>

       <div>1</div>
       <div>2</div>

       </main>

      </Layout>
  )
}

export default Carrito