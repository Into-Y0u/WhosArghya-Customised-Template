import styles from '../../styles/About.module.css';
import db from '../../Database.js'
import EduElement from './EduElement';

const About = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.left}>
          {db.education.map((edu) => (
            <EduElement key={edu._id} data ={edu} />
          ))}
        </div>


        <div className={styles.right}>
          {db.aboutYourself}
        </div>
    </div>
  )
}

export default About