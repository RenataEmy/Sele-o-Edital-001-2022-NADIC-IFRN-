import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
      <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.contato} >
                <div>
                    <p>BR-405 S/N, Pau dos Ferros - RN,</p>
                    <p>59900-000 - Brasil</p>
                </div>
                <div>
                    <p>Telefone (84) 9999 - 9999</p>
                    <p>Email eleicoes.n@gmail.com</p>
                </div>
          </div>
        </div>
          <p className={styles.estilo}>&copy; Todos os direitos reservados.</p>
      </footer>
      </>
    )
  }
  