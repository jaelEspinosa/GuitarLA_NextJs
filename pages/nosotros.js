
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'
const Nosotros = ({carrito}) => {

  
  return (
    <Layout
    pagina='Nosotros'
    carrito={carrito}
    >
    <main className='contenedor'>

        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image  layout='responsive' width={600} height={450} src = "/img/nosotros.jpg" alt='imagen-nosotros'/>
        

        <div>
            <p>Duis in eros ligula. Maecenas in eleifend sem. Quisque a placerat nibh, in convallis purus. 
            Pellentesque nunc nisl, semper non blandit vulputate, condimentum quis est. Proin lacinia urna 
            id ligula pellentesque, ut feugiat mi dictum. Cras eget augue tristique, scelerisque risus nec, 
            efficitur ipsum. Phasellus finibus libero ex, eget interdum justo elementum eget. Duis a nisi at
            nisi bibendum lobortis sit amet at augue. Ut feugiat.</p>

            <p>Duis in eros ligula. Maecenas in eleifend sem. Quisque a placerat nibh, in convallis purus. 
            Pellentesque nunc nisl, semper non blandit vulputate, condimentum quis est. Proin lacinia urna 
            id ligula pellentesque, ut feugiat mi dictum. Cras eget augue tristique, scelerisque risus nec, 
            efficitur ipsum. Phasellus finibus libero ex, eget interdum justo elementum eget. Duis a nisi at
            nisi bibendum lobortis sit amet at augue. Ut feugiat.</p>
        </div>
      </div>
    </main>

    
    </Layout>
  )
}

export default Nosotros