import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>

    <div className={styles.item}>
      <h4>COMPANY</h4><br/>
    <ul>
      <li>About Us</li>
      <li>Careers</li>
      <li>Partners</li>
    </ul>
    </div>

    <div className={styles.item}>
    <h4>COURSES</h4><br/>
    <ul>
      <li>Register</li>
      <li>Login</li>
      <li>Projects</li>
      <li>Teacher</li>
      <li>Parents</li>
      <li>Resources</li>
    </ul>
    </div>

    <div className={styles.item}>
    <h4>SUPPORT</h4><br/>
    <ul>
      <li>FAQs</li>
      <li>Helpdesk</li>
      <li>Contact Us</li>
    </ul>
    </div>

    <div className={styles.item}>
    <h4>LEGAL</h4><br/>
    <ul>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
    </ul>
    </div>

    <div className={styles.item}>
    <h4>LevelUp Works</h4><br/>
<p>LevelUp Works is an Auckland-based<br/>
 enterprise dedicated to developing game-<br/>
based learning software to help teachers in<br/>
response to the New Zealand Digital<br/>
Technologies & Hangarau Matahiko.</p>
<p>alan@levelupworks.com</p>
<p>(021) 668 185</p>
    </div>

    </div>
  )
}