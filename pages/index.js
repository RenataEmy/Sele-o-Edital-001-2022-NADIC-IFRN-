import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>Eleições</h1>
      <main className={styles.container}>
        {/*Eleições*/}
        <section>
          {/*eleições acontecendo*/}
          <section className={styles.acontecendo}>
            <h2 className={styles.h2}>Eleições acontecendo</h2>
            <div className={styles.row}>
              <div>
                <div className={styles.bloco}>
                  <h3>Representantes do grêmio</h3>
                  <p>09/05/2022 a 18/06/2022</p>
                  <div className={styles.ver}>
                    <a href='/votar.js'><p>Ver mais</p></a>
                  </div>
                </div>

                <div className={styles.bloco}>
                  <h3>Representantes do grêmio</h3>
                  <p>09/05/2022 a 18/06/2022</p>
                  <div className={styles.ver}>
                    <a href='/votar.js'><p>Ver mais</p></a>
                  </div>
                </div>

              </div>

              <div>
                <div className={styles.bloco}>
                  <h3>Representantes do grêmio</h3>
                  <p>09/05/2022 a 18/06/2022</p>
                  <div className={styles.ver}>
                    <a href='/votar.js'><p>Ver mais</p></a>
                  </div>
                </div>

                <div className={styles.bloco}>
                  <h3>Representantes do grêmio</h3>
                  <p>09/05/2022 a 18/06/2022</p>
                  <div className={styles.ver}>
                    <a href='/votar.js'><p>Ver mais</p></a>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/*eleições finalizadas */}
          <section className={styles.finalizadas}>
            <h2 className={styles.h2}>Eleições finalizadas</h2>
            <h4 className={styles.h4}>Confira as eleições finalizadas nos últimos três meses.</h4>
            <div className={styles.row}>
              <div className={styles.bloco}>
                <h3>Representantes do grêmio</h3>
                <p>09/05/2022 a 18/06/2022</p>
                <div className={styles.ver}>
                  <a href='/votar.js'><p>Ver mais</p></a>
                </div>
              </div>

              <div className={styles.bloco}>
                <h3>Representantes do grêmio</h3>
                <p>09/05/2022 a 18/06/2022</p>
                <div className={styles.ver}>
                  <a href='/votar.js'><p>Ver mais</p></a>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/*FAQ */}
        <section id='faq'>
          <h1 className={styles.h1}>FAQ</h1>
          <div className={styles.row}>
            <div className={styles.tam}>
              <p><b>“Quem pode cadastrar pleitos?’</b></p>
              <p>Todo usuário cadastrado e com CPF validado pode abrir um pleito.</p>
            </div>
            <div className={styles.tam}>
              <p><b>“Como um candidato é adicionado ao pleito?”</b></p>
              <p>É preciso que o candidato já possua um cadastro na plataforma, para que possa ser adicionado com o CPF.</p>
            </div>
            <div className={styles.tam}>
              <p><b>“Eleitores também podem ser candidatos?”</b></p>
              <p>Sim, pois ambos os cadastros são feitos com o CPF, que é o requisito para participar ou votar em um pleito.</p>
            </div>
          </div>
        </section>

        {/*Login */}
        <section id='login'>
          <h1 className={styles.h1}>Login</h1>
          <h4 className={styles.h4}>Acesse nossa página para participar das votações e receber notificação.</h4>
          <div className={styles.b_color}>
            <form action="/login" method="post">
              <div className={styles.fc_col}>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="user_email" />
              </div>
              <div className={styles.fc_col}>
                <label for="senha">Senha</label>
                <input type="password" id="senha" name="user_senha" />
              </div>
              <div>
                <button className={styles.bt} type='submit'>Entrar</button>
              </div>
              <div>
                <a href='/usuario'>Cadastre-se</a>
              </div>
            </form>
          </div>
        </section>

        {/*Fale conosco */}
        <section id='contato'>
          <h1 className={styles.h1}>Fale conosco</h1>
          <form className={styles.b_color} action="/pagina-processa-dados-do-form" method="post">
            <div className={styles.fc_row}>
              <div className={styles.fc_col}>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="usuario_nome" />
              </div>
              <div className={styles.fc_col}>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="usuario_email" />
              </div>
            </div>

            <div className={styles.fc_col}>
              <label for="msg">Mensagem</label>
              <textarea id="msg" name="usuario_msg"></textarea>
            </div>

            <div>
              <button className={styles.bt} type="submit">Enviar</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
