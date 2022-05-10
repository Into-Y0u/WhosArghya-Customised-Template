import db from '../../Database.js'
import styles from '../../styles/Home.module.css';

const Frontpage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Hi there!!!!
          </h1>
          <p>
            {db.intro}

          </p>

          <a href="content/Arghaydev_Sarkar_Resume.pdf" download>
              <button>
                  <div>
                    Resume
                  </div>
              </button>  
          </a>

        </div>
        <div className={styles.right}>
          <img className={styles.img} src="content/thor1.gif" alt=""  />


        </div>
        
    </div>
  )
}

export default Frontpage