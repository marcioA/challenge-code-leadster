import Image from 'next/image';
import logoPng from '../../assets/logo.png';
import styles from './index.module.css';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <header className={styles.header}>
            {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" /> */}

            {/* <MenuIcon /> */}
            <Image src={logoPng} alt='Leadster logo, estrela com nome na frente' className='logo' />
        </header>
    )
}
