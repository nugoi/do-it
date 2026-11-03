import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
export default function Home() {
  const name = null;
  const isloaded = false;
  const headerVisible = false;
  return (
    <>
      {/* <Header>bugonews</Header> */}
        <main className={styles.main}>
          <h1 className={styles.title}>გამარჯობა, {name || "unknown"}</h1>
          <h2>{isloaded === true ? "ჩატვირთულა" : "არ ჩატვირთულა"}</h2>
          {3 + 7 * 10}
          {/* {headerVisible && <Header/>} */}
        </main>
    </>
  );
}
