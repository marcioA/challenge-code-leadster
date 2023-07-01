import styles from './index.module.css';

// import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from 'react';

type SectionProps = {
    children: ReactNode
}

export default function Section({ children }: SectionProps) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
