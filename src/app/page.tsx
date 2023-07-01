import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Section from '@/components/Section'
import assetHeader from '../assets/asset-header.png';
import logoPng from '../assets/logo.png';
import graphPng from '../assets/comparativo_img_CTA.png';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Section>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <span className={styles.messageBox}>Webinars Exclusivos</span>

        <h2>Menos Conversinha,</h2>
        <h1 className={styles.mainText}>MAIS CONVERSÃO <Image src={assetHeader} alt="Três traços para enfase na palavra conversão" /></h1>
        <hr />
        <p>Conheça as estratégias que <strong>mudam o jogo</strong> e como aplicá-las no seu negócio.</p>
        {/* <Image src={logoPng} alt='Leadster logo, estrela com nome na frente' className='logo' /> */}
      </Section>
      <div>
        <h1>teste</h1>
      </div>
      <Section>
        <Image src={graphPng} alt='Gráfico com melhoria dos leads com a leadster' style={{ height: '100%' }} />
        <div className={styles.asideContent}>
          <h2>Pronto para triplicar sua</h2>
          <h1 className={styles.mainText}>Geração de Leads?</h1>
          <p>Criação e ativação em <strong>4 minutos.</strong>.</p>
          <hr />
          <div className={styles.buttonGroup}>
            <button>VER DEMONSTRAÇÃO</button>
            <button>
              <span>Top 10 - Apps mais usados</span>
              RD STATION
            </button>
          </div>
          <span>
            <Image src={logoPng} alt='teste' />
            <strong>Não</strong> é necessário Cartão de Crédito
            <Image src={logoPng} alt='Estrelas indicando a avaliação dos usuários' />
            <span>4.9/5 média de satisfação</span>
          </span>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
