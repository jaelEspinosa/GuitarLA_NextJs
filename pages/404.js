import React from 'react'

import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'


const noEncontrada = () => {
  return (
     
    <div className={styles.noEncontrado}>

        <h1 className='heading'>No existe la página</h1>

        <Link  href='/'>volver al inicio</Link>

    </div>

      
  )
}

export default noEncontrada