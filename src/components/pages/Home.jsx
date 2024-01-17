import React from 'react'
import styles from './Home.module.css'
import savings from '../../img/coast.svg'
import homem from '../../img/imagem-geovane.jpg'
import mulher_um from '../../img/pessoa-andrea.jpg'
import mulher_dois from '../../img/pessoa-mariana.jpg'
import LinkButton from '../layout/LinkButton'
import Testimunial from '../layout/Testimunial'

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vind ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to='/newproject' text="Criar Projeto"/>
      <img src={savings} alt="" />
      <div className={styles.testimunial}>
        <Testimunial
        imageScr={mulher_um}
        title='Andreia' 
        quote="Como responnsável no controle de finanças do meu setor percebi que interface intuitiva e as funcionalidades robustas facilitaram o acompanhamento de despesas, permitindo-nos manter o controle total dos nossos recursos."
        />
        <Testimunial
        imageScr={homem}
        title='Fernando - analista financeiro' 
        quote="encontrei no Coast uma ferramenta excepcional para gerenciar as finanças de projetos complexos. A capacidade de rastrear despesas, gerar relatórios personalizados e prever orçamentos futuros é incomparável."
        />
        <Testimunial
        imageScr={mulher_dois}
        title="Mariana - Gerente de projetos" 
        quote='Coast revolucionou a maneira como lidamos com as finanças do nosso projeto. Com suas ferramentas poderosas de orçamentação e relatórios detalhados, podemos tomar decisões informadas em tempo real.'
        />
      </div>

    </section>
  )
}

export default Home
