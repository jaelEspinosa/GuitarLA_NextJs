import React from 'react'
import Guitarra from './Guitarra'
import Styles from '../styles/Listado.module.css'

const Listado = ({guitarras}) => {
    
  return (
    <div className={Styles.listado}>
    {guitarras.map(guitarra =>(
        <Guitarra key={guitarra.id} guitarra = {guitarra}/>
    ))}
    
    </div>
  )
}

export default Listado