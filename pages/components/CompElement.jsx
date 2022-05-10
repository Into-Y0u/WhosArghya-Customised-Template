import React from 'react';
import styles from '../../styles/Exp.module.css';

const CompElement = ({data}) => {
  return (
    <div  className={styles.element}>
        <h2 className={styles.compTitle}>{data.compName}</h2>
        <div className={styles.child}>
            <div className={styles.compRole}>{data.compRole}</div>
            <div className={styles.compRole}>{data.compTimeline}</div>
        </div>
        <div>
            <p className={styles.compPara}>{data.compDesc} 
            </p>
        </div>
    </div>
  )
}

export default CompElement;