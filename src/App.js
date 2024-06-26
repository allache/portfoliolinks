import pic from "./imag02.jpg";
import * as React from "react";
import styles from "./App.module.css";
import backgroundImage from "./backgroundimg.jpg";


function App() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
   backgroundSize: "800px 800px",
    backgroundPosition: 'center',
    backgroundRepeat: "repeat",
  };

  return (
    <div className={styles.App}>
      <div style={containerStyle}>
        <br />
        <br />
        <br />
        <div className="center">
       <h1 className={styles.h1}> Hello there ...  </h1> 
          <img src={pic} alt="Avatar" className="avatar" />
          <br /> 
          <br />
          <a href="https://mega.nz/file/ILNSDJ4C#-ZzA8ZFpnpLQJIVle6GzvBE0vbbPM6r6Mu5UTKNg1F4" target="_blank">
            <button variant="contained" className={styles.btn}>
               "Gestion de Stock " Application Desktop 
            </button>
          </a>     
          <span />
          <br />
          <br />

          <br />

          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/allache-abdelmalek-942b10173/?fbclid=IwAR2JwM9WVngPzuqe1b4lJffeZWDmQc_GUbtHfE_2ASZ-LTK-fmTLbzMks-c"
            target="_blank"
          >
            <button variant="contained" className={styles.btn}>
              My Linkedin  
            </button>
          </a>
          <br />
          <br />

            <a
            href="https://cv-abdelmalek-85cd97.netlify.app/?fbclid=IwAR3PkIwydmZVpYgWz0DmkwqMSe1Lh-Tl_Qv6JW1jpe8ZrpEk41YLK5cy5_I"
            target="_blank"
           >
            <button variant="contained" className={styles.btn}>
              just a website showing Gallery of my deploma and some working on cctv filed
            </button>
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          
       
        </div>
      </div>
    </div>
  );
}

export default App;
