import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const callNative = () => {
    try {
      // window.webkit.messageHandler.callbackHandler.postMessage("메세지호출");
      (window as any).webkit.messageHandlers.callbackHandler.postMessage(
        "메세지호출"
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={callNative}>네이티브함수호출12</button>
    </div>
  );
};

export default Home;
