import styles from '../styles/Home.module.css'

export default function pleito(){
    return(
        <main className={styles.container}>
            <h1 className={styles.h1}>Cadastrar pleito</h1>
            <form className={styles.b_color} action="/cadastrar_pleito" method="post">
              <div className={styles.fc_col}>
                  <label for="pleito">Nome do pleito</label>
                  <input type="text" id="pleito" name="nome_pleito" />
              </div>
              <div className={styles.fc_col}>
                  <label for='desc'>Descrição</label>
                  <textarea id='desc' name='desc_pleito'></textarea>
              </div>
              <h4>Período de votação</h4>
              <div>
                <div className={styles.fc_col}>
                    <label for='inicio'>Início</label>
                    <input type='date' id='inicio' name='data_inicio'/>
                </div>
                <div className={styles.fc_col}>
                    <label for='final'>Início</label>
                    <input type='date' id='final' name='data_final'/>
                </div>
              </div>
              <div className={styles.fc_col}>
                  <label for='cargo'>Cargo</label>
                  <input type='text' id='cargo' name='candidato_cargo'/>
              </div>
              <div className={styles.fc_col}>
                  <labe for='quant'>Quantidade de candidatos</labe>
                  <input type='number' id='quant' name='quant_candidatos'/>
              </div>
              <h4>Candidatos</h4>
              <div className={styles.fc_col}>
                <label for='cpf'>CPF</label>
                <input type="text" name="cpf" placeholder="000.000.000-00"></input>
              </div>
              <div className={styles.fc_col}>
                <label for='cpf'>CPF</label>
                <input type="text" name="cpf" placeholder="000.000.000-00"></input>
              </div>
              <div>
                <button className={styles.bt} type="submit">Salvar alterações</button>
                <button className={styles.bt} type="submit">Finalizar</button>
              </div>

            </form>
        </main>


    )
}