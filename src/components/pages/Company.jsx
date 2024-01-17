import React from 'react'
import company from '../../img/company.svg'
import styles from './Company.module.css'

const Company = () => {
  return (
    <div className={styles.container}>
      <p>A Coast nasceu da visão empreendedora de um grupo de profissionais apaixonados por finanças e gestão de projetos. Fundada há uma década, a empresa rapidamente se destacou como líder no desenvolvimento de uma plataforma inovadora para o controle financeiro em projetos. Ao combinar tecnologia avançada e design intuitivo, a Coast oferece uma solução abrangente que simplifica a vida de gerentes e analistas financeiros. Com clientes em todo o mundo, a empresa se destaca pela dedicação à transparência e eficiência nas operações financeiras. A missão da Coast é capacitar organizações a alcançar o sucesso financeiro por meio de ferramentas poderosas e inteligentes. Ao longo dos anos, a Coast tem evoluído, adaptando-se às crescentes demandas do mercado, mantendo-se fiel ao compromisso de fornecer uma plataforma de gestão financeira que faz a diferença.</p>
      <img src={company} alt='comapny' className={styles.img}/>
    </div>
  )
}

export default Company
