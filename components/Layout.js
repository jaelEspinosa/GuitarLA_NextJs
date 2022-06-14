import  Head  from "next/head"
import Footer from "./Footer"
import Header from "./Header" 

const Layout = ({children, pagina,guitarra,carrito}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio Web de venta de guitarras"/>
            
            
        
        </Head>
        <Header
          guitarra={guitarra}
          carrito={carrito}
        />
        {children} 
        <Footer/>
    </div>
  )
}
Layout.defaultProps ={
  guitarra:null
}
export default Layout