import styles from "./Footer.module.css";
import FooterNav from "./FooterNav";
import logo from "../assets/Images/WhiteLogoFooter.png";

function Footer() {
  return (
    <>
      <footer className={`block ${styles.container}`}>
        <div className={`restrictContent ${styles.footer}`}>
          <div className={`${styles.footerImg}`}>
            <img className={`${styles.img}`} src={logo} alt="" />
          </div>

          <div style={{ textAlign: "center" }}>
            <FooterNav />
          </div>

          <div className={`${styles.address}`}>
            <h3 className={`${styles.addressHeading}`}>Address</h3>
            <div className={`${styles.addressText}`}>
              <p>4760 Preston Rd. 244-134</p>
              <p>Frisco, TX 75034</p>
              <p style={{ marginTop: "3rem" }}>
                <strong>Call us:</strong> (469) 279-7927
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${styles.copyright}`}>
        <div className={styles.copyrightContent}>
          <p>© 2026 Gladline Cleaning</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
