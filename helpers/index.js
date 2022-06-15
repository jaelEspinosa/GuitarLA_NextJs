export const formatearFecha =  fecha =>{
    const fechaNueva = new Date()
    
    const opciones ={
        year : 'numeric',
        month: 'long',
        day: '2-digit'
    } 

    return fechaNueva.toLocaleDateString('es-ES', opciones) 
}
export const datosFiltrados= (guitarrasBuscador,cursosBuscador,busqueda)=>{
    let resultadoBusqueda = guitarrasBuscador.filter(item => item.nombre.toLowerCase().includes(busqueda.toLowerCase()))
  /* const filtered=characters.filter(item=>item.name.toLowerCase().includes(find.toLowerCase())) */
  
         resultadoBusqueda = [...resultadoBusqueda, ...cursosBuscador.filter(item => item.titulo.toLowerCase().includes(busqueda.toLowerCase()))] 

  
  return resultadoBusqueda
 }

/* export const ordenarPorPrecio = (valor)=>{
    if(valor==='mayorAMenor'){
      return '_sort=precio'
    }else if(valor==='menorAMayor'){
      return '_sort=nombre'
    }else{
      return '_sort=precio'
    }
  } */