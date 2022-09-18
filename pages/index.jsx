import styles from "../styles/home/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>メニュー</h1>
      <div className={styles.content}>
        <div className={styles.itemBox}>
          <h1>Draft Beer</h1>
          <Link href="/draftbeer/menu">
            <a className={styles.a}>詳細</a>
          </Link>
        </div>
        <div className={styles.itemBox}>
          <h1>Bottled Beer</h1>
          <Link href="">
            <a className={styles.a}>詳細</a>
          </Link>
        </div>
        <div className={styles.itemBox}>
          <h1>Cocktail</h1>
          <Link href="">
            <a className={styles.a}>詳細</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
