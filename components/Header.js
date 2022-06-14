import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Header.module.css'
import {useRouter} from 'next/router'


const Header = ({guitarra, carrito}) => {
  
  
  const router = useRouter()
 
  return (
    <header className={styles.header}>
        <div className="contenedor">
          <div className={styles.barra}>
            <Link href='/'> 
            <a className={styles.logo}>
            <Image width ={400} height={100} src="/img/logo.svg" alt='logo'/>
            </a>
            </Link>
            <div className={styles.buscador} >
          <Image layout="fixed" width={25} height={25} src='/img/lupa.png' alt='lupa'/>
          <input type = 'text' placeholder="busca tu Producto/Curso"/>
        </div>
            <nav className={styles.navegacion}>
                  <Link href = '/'>Inicio</Link>
                  <Link href = '/nosotros'>Nosotros</Link>
                  <Link href = '/blog'>Blog</Link>
                  <Link href = '/tienda'>Tienda</Link>
                  <Link href = '/cursos'>Cursos</Link>
                  <Link href = '/carrito'>
                      <a>
                        <Image layout="fixed" width={20} height={15} src='/img/carrito.png' alt='imagen carrito'/>
                        {carrito && ( carrito.length>0 ?
                          <div className={styles.carritoLleno}>{carrito.length}</div>
                          :null)}

                      </a>
                  </Link>
                  
            </nav>
          
                
          </div>
           {guitarra && (
             <div className={styles.modelo}>
             <h2>Modelo {guitarra.nombre}</h2>
             <p>{guitarra.descripcion}</p>
             <p className={styles.precio}>{guitarra.precio}€</p>
             <Link href={`/guitarras/${guitarra.url}`}>
               <a className={styles.enlace}>
                 Ver Producto
               </a>
             </Link>

             </div>
           )}
        </div>
        {router.pathname === '/' && (
          <div className={styles.guitarra}>
          <Image layout="fixed" width={500} height={1200} src = '/img/header_guitarra.png' alt='imagen guitarra'/>
          </div>
        )}
      
    </header>
  )
}

export default Header