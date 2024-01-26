import React from 'react'
import styles from './OurRobot.module.css'

// Components
import DivisaoDeSecao from '../../components/DivisaoDeSecao/DivisaoDeSecao.jsx'
import TimeLineRobot from '../../components/TimeLineRobot/TimeLineRobot.jsx'

const OurRobot = () => {
  return (
    <main className={styles.conteudoPrincipal}>
        <DivisaoDeSecao frase="Nossos Robôs"/>
        <TimeLineRobot/>
    </main>
  )
}

export default OurRobot