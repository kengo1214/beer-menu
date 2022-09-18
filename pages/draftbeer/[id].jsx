import { client } from "../../libs/client";
import Link from "next/link";
import styles from "../../styles/menu/menuAbout.module.scss";
import Image from "next/image";

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = await client.get({ endpoint: "draft-beer", contentId: id });

  return {
    props: {
      draftBeer: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "draft-beer" });
  const paths = data.contents.map((content) => `/draftbeer/${content.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default function draftBeerIndividual({ draftBeer }) {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <h1>{draftBeer.title}</h1>
        <div>{draftBeer.content}</div>
        <Image
          className={styles.image}
          src={draftBeer.image.url}
          width="600px"
          height="500px"
          alt="beer"
        />
      </div>
      <div className={styles.button}>
        <Link href="/draftbeer/menu">
          <a className={styles.a}>戻る</a>
        </Link>
        <Link href="/">
          <a className={styles.a}>ホームに戻る</a>
        </Link>
      </div>
    </div>
  );
}
