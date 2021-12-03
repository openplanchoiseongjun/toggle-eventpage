import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  function showAndroidToast(toast: string) {
    (window as any).Android.showToast(toast);
  }
  const callNative = () => {
    // window.webkit.messageHandler.callbackHandler.postMessage("메세지호출");
    (window as any).webkit.messageHandlers.iosMessage.postMessage(
      "메세지호출1"
    );
    showAndroidToast("안드로이드메세지호출");
  };

  const iosCall = () => {
    alert("ios call");
  };

  return (
    <div className={styles.container}>
      <button onClick={callNative}>네이티브함수호출12</button>
    </div>
  );
};

export default Home;
