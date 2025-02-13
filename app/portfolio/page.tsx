import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Bem-vindo ao meu portfólio!</h1>

        <p className={styles.paragraphP}>
        Cada projeto reflete minha dedicação a entender as necessidades do usuário, trabalhar em estreita colaboração com equipes e entregar soluções criativas e funcionais. 
        </p>
        <p className={styles.paragraphP}>
        Meu foco principal é em front-end, utilizando as tecnologias mais recentes, HTML, CSS, SASS, JavaScript, TypeScript, React.js e frameworks como Next.js, para construir páginas dinâmicas e responsivas que atendam a todos os dispositivos.
        </p>
        <p className={styles.paragraphP}>
        Aqui você encontra uma variedade de projetos, desde sites simples e modernos até aplicações mais complexas, sempre com a preocupação em aprimorar a experiência do usuário.
        </p>
        <p className={styles.paragraphP}>
        Se você tem um projeto em mente ou deseja saber mais sobre meu trabalho, fique à vontade para entrar em contato. Estou sempre aberto a novas oportunidades de colaborar e expandir meus conhecimentos.
        </p>

        {/* Botões Next e Back */}
        <div className={styles.ctas}>
          <Link href="/home" className={styles.secondary}>
            Back
          </Link>
          <Link href="#" className={styles.primary}>
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
