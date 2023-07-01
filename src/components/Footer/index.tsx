import Image from 'next/image';
import styles from './index.module.css';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.columnList}>
                <h3>Links Principais</h3>
                <li>Home</li>
                <li>Ferramenta</li>
                <li>Preços</li>
                <li>Contato</li>
            </ul>

            <ul className={styles.columnList}>
                <h3>Cases</h3>
                <li>Geração de Leads B2B</li>
                <li>Geração de Leades em Software</li>
                <li>Geração de Leads em Imobiliária</li>
                <li>Cases de Sucesso</li>
            </ul>

            <ul className={styles.columnList}>
                <h3>Materiais</h3>
                <li>Blog</li>
                <li>Parcerias com agências</li>
                <li>Guia Definitivo do Marketing</li>
                <li>Materiais Gratuitos</li>
            </ul>

            <ul className={styles.columnList}>
                <h3>Siga a Leader</h3>
                <li>
                    {/* <SocialMidias /> */}
                </li>
                <li>
                    <label htmlFor="">E-mail:</label>
                    <span>contato@leadster.com.br</span>
                </li>
                <li>
                    <label htmlFor="">Telefone: </label>
                    <span>(42) 98828-9851</span>
                </li>
            </ul>

        </footer>
    )
}
