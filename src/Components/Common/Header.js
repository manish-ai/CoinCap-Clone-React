import React from "react";
import Styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.navbarContainer}>
          <div className={Styles.left}>
            <div className={Styles.links}>
                <div className={Styles.navElementBox}>
                    <span className={Styles.navElement}> Coins  </span>     
              </div>
              <div className={Styles.navElementBox}>
                  <span className={Styles.navElement}> Exchanges  </span>   
            </div>
            <div className={Styles.navElementBox}>
               <span className={Styles.navElement}> Swap  </span>     
            </div>
            </div>
          </div>
                <div className={Styles.center}><img src="/icon.svg" width="80%" height="70%"/></div>
          <div className={Styles.right}>
              <div className={Styles.search}>
                <div className={Styles.searchIcon}>
                <img src="https://img.icons8.com/ios-filled/20/000000/search--v1.png"/>
                </div>
              </div>            

            <div className={Styles.notification} >
                <span className={Styles.notificationIcon}>
                  <img src="/settings.svg" />
             </span>
            </div>
                    <button className={Styles.connectBtn}>Connect Wallet</button>
          </div>
        </div>
      </div>
  );
};

export default Header;
