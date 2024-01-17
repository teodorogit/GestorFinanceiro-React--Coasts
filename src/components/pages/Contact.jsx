import React from 'react'
import styles from './Company.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Historia do Fundador</h1>
      <p>A Coast foi fundada por Matheus Batisti, um empreendedor visionário no campo da tecnologia e finanças. Nascido em uma pequena cidade, Daniel sempre teve uma paixão pela resolução de problemas complexos. Após concluir seus estudos em Ciências da Computação e Finanças, ele percebeu a lacuna significativa na gestão financeira de projetos.

      Movido por seu desejo de simplificar processos e impulsionar a eficiência, Daniel reuniu uma equipe dedicada para desenvolver uma solução inovadora. Em 2012, a Coast nasceu, com a missão de capacitar empresas a controlar suas finanças de maneira mais inteligente.
      </p>
      <a href="https://www.linkedin.com/in/matheus-teodoro-a901211ba/" target='_blank' className={styles.social}>Contato</a>
    </div>
  )
}

export default Contact
