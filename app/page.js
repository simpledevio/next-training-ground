import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <p>Get started by editing <code>app/page.js</code>. Save and see your changes instantly.</p>
      </main>
    </div>
  );
}
