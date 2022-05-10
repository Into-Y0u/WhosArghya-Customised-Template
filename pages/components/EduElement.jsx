import React from 'react';
import styles from '../../styles/About.module.css';

const EduElement = ({ data }) => {
    // console.log({data})
    return (
        <div  className={styles.element}>
            <h2 className={styles.compTitle}>{data.eduName}</h2>
            <div className={styles.child}>
                <div className={styles.compRole}>{data.course}</div>
                <div className={styles.compTimeline}>{data.Timeline}</div>
            </div>
            <div className={styles.child}>
                <div className={styles.compRole} style ={{fontSize:"15px"}} >{data.results}</div>   
            </div>
        </div>
  )
}

export default EduElement;