import styles from '../styles/Home.module.css'

export default function usuario(){
    return(
        <main className={styles.container}>
            <h1 className={styles.h1}>Registre-se</h1>
            <form className={styles.b_color} action="/cadastrar_usuario" method="post">
              <div className={styles.fc_col}>
                  <label for="user">Nome completo</label>
                  <input type="text" id="user" name="nome_user" />
              </div>
                <div className={styles.fc_col}>
                    <label for='nasc'>Data de nascimento</label>
                    <input type='date' id='nasc' name='data_nascimento'/>
                </div>
              <h4>Endereço</h4>
              <div className={styles.fc_col}>
                  <label for='rua'>Rua</label>
                  <input type='text' id='rua' name='rua_user'/>
              </div>
              <div className={styles.fc_col}>
                  <labe for='num'>Nº</labe>
                  <input type='number' id='num' name='numero_casa'/>
              </div>
              <div className={styles.fc_col}>
                  <label for='bairro'>Bairro</label>
                  <input type='text' id='bairro' name='bairro_user'/>
              </div>
              <h4>Candidatos</h4>
              <div className={styles.fc_col}>
                <label for='cpf'>CPF</label>
                <input type="text" name="cpf" placeholder="000.000.000-00"></input>
              </div>
              <div className={styles.fc_col}>
                <button className={styles.bt} type="submit">Cadastrar</button>
              </div>

            </form>
        </main>


    )
}