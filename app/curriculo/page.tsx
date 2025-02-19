import Image from "next/image";

import Link from "next/link";
import styles from "./page.module.scss";

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.saldacao}>Currículo</h1>

        {/*Avata */}
        <div className={styles.cardGrid}>

            <div className={styles.card}>
              <Image
              className={styles.avata}
              src="/perfil.jpg"
              alt="logo-js"
              width={150}
              height={150}
            />

          <div>
          <p className={styles.paragraph}>
          <span className={styles.bold}>Nome:</span> Valter Vieira Gomes Junior <br />
          <span className={styles.bold}>Idade:</span> 45 anos | Casado | Pai de familia <br /><br />
          <span className={styles.bold}>Enderço:</span> Rua Edoardo Mascheroni, n° 12 <br />
          <span className={styles.bold}>CEP:</span> 04411-110 |
          <span className={styles.bold}> Bairro:</span> Americanópolis |
          <span className={styles.bold}> Cidade:</span> São Paulo - SP
          </p>
          
           
          </div>

            
        </div>
       </div>

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
