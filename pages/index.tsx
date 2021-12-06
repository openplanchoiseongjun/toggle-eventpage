import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function sendMessage(msg: string) {
    (window as any).android.setMessage(msg);
  }
  const callNative = () => {
    // window.webkit.messageHandler.callbackHandler.postMessage("메세지호출");
    if ((window as any).webkit) {
      (window as any).webkit.messageHandlers.iosMessage.postMessage(
        "메세지호출1"
      );
    }
    if ((window as any).android) sendMessage("안드로이드메세지호출");
  };

  return (
    <div className={styles.container}>
      <button onClick={callNative}>네이티브함수호출12</button>
    </div>
  );
};

export default Home;
