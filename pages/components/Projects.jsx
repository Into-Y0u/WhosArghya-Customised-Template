

import styles from '../../styles/Project.module.css'
import db from '../../Database.js';
import ProjectElement from './ProjectElement';


const Projects = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            {db.projs.map((edu) => (
              <ProjectElement key={edu._id} data ={edu} />
            ))} 
        </div>

    </div> 
    
  )
}

export default Projects;