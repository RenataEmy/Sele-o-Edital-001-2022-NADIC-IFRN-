import Image from 'next/image'
import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'

export default function Hero() {
    return (
        <>
        <div className={styles.h}>
            <div className={styles.hero}>
                <div>
                    <h1>Eleições Online</h1>
                </div>
                <div>
                <Image src={logo} width="500px" height="450px" alt="Logo IFRN" />
                </div>
            </div>
        </div>

        </>

    )
}