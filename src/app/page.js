import Image from "next/image";
import styles from "./page.module.css";
import EventFunctionState from "./components/EventFunctionState";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello Irfan</h1>
      <EventFunctionState />
    </div>
  );
}
