import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Bem-vindo ao meu portfólio!</h1>

        {/* Sessão cards com 3 colunas e 2 linhas */}
        <div className={styles.cardGrid}>

            <div className={styles.card}>
              <h3>Website: Portal de Serviços</h3>
              <p>Desenvolvido com HTML, SCSS, Next.js Javascript</p>
              <Link href="#" className={styles.cardLink}>Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Website: Controle de Estacionamento</h3>
              <p>Desenvolvido com HTML, CSS, Javascript</p>
              <Link href="https://parking-controle-estacionamento.vercel.app/" 
              className={styles.cardLink} 
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Website: Bob's Restaurantes</h3>
              <p>Desenvolvido com HTML, CSS, Bootstrap, Javascript</p>
              <Link href="https://bobs-restaurantes.vercel.app/" 
              className={styles.cardLink}
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Todo-List: Lista de Tarefas</h3>
              <p>Desenvolvido com HTML, CSS, Vue.js, Javascript</p>
              <Link href="https://todo-list-vue-brown-one.vercel.app/" className={styles.cardLink}
              target="_blank" 
              rel="noopener noreferrer">Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Projeto</h3>
              <p>Descrição breve do projeto</p>
              <Link href="#" className={styles.cardLink}>Visualizar</Link>
            </div>
            <div className={styles.card}>
              <h3>Projeto</h3>
              <p>Descrição breve do projeto</p>
              <Link href="#" className={styles.cardLink}>Visualizar</Link>
            </div>
        </div>

        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/home" className={styles.secondary}>
            Back
          </Link>
          <Link href="/chatbot" className={styles.primary}>
            Next
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 - Valter Vieira Gomes Junior</p>
      </footer>
    </div>
  );
}
