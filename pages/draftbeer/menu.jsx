import { client } from "../../libs/client";
import styles from "../../styles/menu/menu.module.scss";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "draft-beer" });
  // console.log(data.contents);
  return {
    props: {
      draftBeer: data.contents,
    },
  };
}

export default function DraftBeer({ draftBeer }) {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Draft Beer（樽ビール）</h1>
      <div className={styles.main}>
        {draftBeer.map((draftBeer) => (
          <div className={styles.container} key={draftBeer.id}>
            <div className={styles.title}>{draftBeer.title}</div>
            {/* <div className={styles.content}>{draftBeer.content}</div> */}
            <Image
              className={styles.image}
              src={draftBeer.image.url}
              width="600px"
              height="500px"
              alt="beer"
            />
            <Link href={`/draftbeer/${draftBeer.id}`}>
              <a className={styles.a}>詳細</a>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/">
        <a className={styles.a}>戻る</a>
      </Link>
    </div>
  );
}
