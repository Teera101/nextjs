'use client';

import Navbar from '../../components/Navbar';
import styles from './page.module.css';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>About Me</h1>
        <p className={styles.info}>
          ชื่อ: นายธีร ริ้วทวี<br />
          อีเมล: teera.r@kkumail.com<br />
          คณะ: สหวิทยาการ<br />
          สาขา: วิทยาการคอมพิวเตอร์และสารสนเทศ
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
