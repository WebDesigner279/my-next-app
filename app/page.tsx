import Image from "next/image";
import styles from "./page.module.scss";

// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Bem vindos ao meu Portfólio</h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

<p className={styles.paragraph}>
  <span className={styles.bold}>Olá,</span> sou Valter Vieira Gomes Junior
</p>
<p className={styles.paragraphP}>
  Sou desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais.
</p>
<p className={styles.paragraphP}>
  Experiência em tecnologias como HTML, CSS, SASS, JavaScript, TypeScript, React.js e frameworks como Next.js
</p>
<p className={styles.paragraphP}>
  Estou sempre explorando novas tecnologias e aprimorando minhas habilidades para entregar soluções criativas e eficientes.
</p>
<p className={styles.paragraphP}>
  Este portfólio é uma amostra do que posso fazer, e estou animado para colaborar em novos desafios! Vamos construir algo incrível juntos?
</p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Ver meus projetos
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Métodologia de trabalho
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Aprender
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Exemplos
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Vá para nextjs.org →
        </a>
      </footer>
    </div>
  );
}
