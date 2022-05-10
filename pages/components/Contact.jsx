import styles from '../../styles/Contact.module.css'
import { Codechef, Codeforces,Facebook,Github, Gmail, Hackerrank, Leetcode, Linkedin, Twitter, Youtube } from "@icons-pack/react-simple-icons";
import Link from 'next/link';
import db from '../../Database';

const Contact = () => {
  return (
    <div className={styles.container}  >

        <div className={styles.left}>
          <div  className={styles.element}>
            <img className={styles.img} src="content/seeYou.gif" alt=""  />
          </div>

       
        </div>

        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href={db.contacts.linkedin} passHref>
                  <a target="_blank"><Linkedin color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.mail} passHref>
                  <a target="_blank"><Gmail color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.twitter} passHref>
                  <a target="_blank"><Twitter color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.facebook} passHref>
                  <a target="_blank"><Facebook color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.youtube} passHref>
                  <a target="_blank"><Youtube color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Link href={db.contacts.github} passHref>
                  <a target="_blank"><Github color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.leetcode} passHref>
                  <a target="_blank"><Leetcode color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.Hackerrank} passHref>
                  <a target="_blank"><Hackerrank color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.codeforces} passHref>
                  <a target="_blank"><Codeforces color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
              <Link href={db.contacts.codechef} passHref>
                  <a target="_blank"><Codechef color="#ffffff"  size={40} className={styles.ico} /></a>
              </Link>
            </div>
          </div>

        </div>
        
    </div> 
    
  )
}

export default Contact;


