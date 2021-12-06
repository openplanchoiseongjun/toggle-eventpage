import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
interface DataList {
  screen_moving_div_code: string;
  screen_moving_code: string;
  screen_moving_url: string;
}
const Home: NextPage = () => {
  function sendMessage(msg: DataList) {
    (window as any).android.setMessage(msg);
  }
  const callNative = () => {
    const data: DataList = {
      screen_moving_div_code: "CM03000003",
      screen_moving_code: "",
      screen_moving_url:
        "https://kr.trip.com/sale/w/2348/weekendsupersale.html?locale=ko_kr&AllianceID=1299066&SID=3763636",
    };
    console.log(data);
    // window.webkit.messageHandler.callbackHandler.postMessage("메세지호출");
    if ((window as any).webkit) {
      (window as any).webkit.messageHandlers.iosMessage.postMessage(data);
    }
    if ((window as any).android) {
      (window as any).android.sendMessage(data);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={callNative}>네이티브함수호출12</button>
    </div>
  );
};

export default Home;
