import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'


const finalizado = ({carrito}) => {
  return (
    <Layout pagina= {'Finalizar Pedido'} carrito = {carrito} >

    <h1 className={styles.title}>Su compra se ha registrado con exito</h1>
    <h2 className={styles.h2}>¡Muchas gracias por su compra!</h2>
    <div className={styles.contenedor}>

      <Link   href= '/?q=finalizado'><span className={styles.volver}>Volver</span></Link>
    </div>
    </Layout>
  )
}

export default finalizado