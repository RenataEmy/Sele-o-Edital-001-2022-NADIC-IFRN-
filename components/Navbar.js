import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Navbar() {
  return (
    <div className={styles.h}>
      <nav className={styles.navbar}>
        <Link href='/'><a>
          <Image src={logo} width='50px' height='55px' /></a>
        </Link>
        <ul className={styles.display}>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/pleito">
              <a>Cadastrar pleito</a>
            </Link>
          </li>
          <li>
            <Link href="#faq">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="#login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/usuario">
              <a>Registre-se</a>
            </Link>
          </li>
          <li>
            <Link href="#contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}
