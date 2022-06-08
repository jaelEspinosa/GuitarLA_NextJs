export const formatearFecha =  fecha =>{
    const fechaNueva = new Date()
    
    const opciones ={
        year : 'numeric',
        month: 'long',
        day: '2-digit'
    } 

    return fechaNueva.toLocaleDateString('es-ES', opciones) 
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