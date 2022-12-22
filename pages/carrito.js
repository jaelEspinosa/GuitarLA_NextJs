import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito,actualizarCantidad,borrarRegistro,setCarrito}) => {
  console.log('desde carrito component', carrito) 
  
const [total, setTotal]= useState(0)   
const [finalizado, setFinalizado]=useState(false) 

const router = useRouter()

useEffect(()=>{
      const cantidadTotal= carrito.reduce((total, producto)=> total +(producto.cantidad*producto.precio),0)
      setTotal(cantidadTotal)
},[carrito])

useEffect(()=>{
  if(finalizado) router.replace('/finalizado')

},[finalizado])

  return (
      <Layout pagina = {'carrito de compra'}
      carrito = {carrito}>

    <h2 className='heading'>Su Carrito de Compra</h2>
      <main className={`contenedor ${styles.contenido}`}>
          <div className={styles.carrito}>
          <h2>Artículos</h2>
          {carrito.length === 0 ? 'Carrito vacio':(

            carrito.map(producto =>(
              <div key={producto.id} className={styles.producto}>           
                <div>
                {producto.nombre ? <Image layout='fixed' width={60} height={130} src={producto.imagen} alt={`imagen ${producto.nombre}${producto.titulo}`}/>:
                 <Image layout='fixed' width={100} height={100} src={producto.imagen} alt={`imagen ${producto.nombre}${producto.titulo}`}/>
                }
                </div>
                <div>
                 <p className={styles.nombre}>{producto.nombre}</p>
                 <p className={styles.nombre}>{producto.titulo}</p>
                 <div className={styles.cantidad}>
                    <p>Cantidad: </p>
                    <select 
                            value={producto.cantidad}
                            className={styles.select}
                            onChange={(e) =>actualizarCantidad({
                              cantidad: e.target.value,
                              id: producto.id
                            })}
                      >
                
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
                 </div>
                 <p className={styles.precio}><span>{producto.precio}€</span></p>
                 <p className={styles.subtotal}>Subtotal :<span>{producto.precio*producto.cantidad}€</span></p>
                </div>
                <div className={styles.eliminar}>
                <Image
                layout='fixed' 
                width={30}
                height={30}
                src='/img/boton-cerrar.png'
                alt='cerrar'  
                onClick={()=>borrarRegistro(producto.id)}
                />
                </div>
                
                  
                
              </div>
            ))
            

          )}

          </div>
          <div className={styles.resumen}>
          {total > 0 ? (
            <>
            <h3>Resumen del pedido</h3>
            <div className={styles.total}>
              <div>
                <p> Total:</p>
                <p> Impuestos:</p>
                <p className={styles.apagar}> Total(impuestos inc.):</p>
              </div>
              <div>
                <p><span>{((total - (total/100)*21)).toFixed(2)} €</span></p>
                <p><span>{((total/100)*21).toFixed(2)} €</span></p>
                <p><span className={styles.apagar}>{total} €</span></p>
              </div>
                
            </div>
            <button onClick={()=>setFinalizado(true)} className={styles.button} type='button'>Confirmar pedido y pagar</button>
            </>

          ): <p>Carrito vacio</p>}

          </div>
      
       </main>

      </Layout>
  )
}

export default Carrito