import styles from '../../styles/Exp.module.css'
import db from '../../Database.js';
import CompElement from './CompElement';
import { Blogger, C, Cplusplus, CssThree, Databricks, Django, Figma, Firebase, Git, Github, Heroku, Html5, Java, Javascript, Json, Kotlin,  Mongodb, Mysql, Netlify, Nextdotjs, Nodedotjs, Postman, Python, ReactJs, Shopify,  Tableau, Vercel, Visualstudiocode, Wix, Wordpress } from "@icons-pack/react-simple-icons";

import React from 'react';

const Exp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          {db.experi.map((edu) => (
              <CompElement key={edu._id} data ={edu} />
            ))}       
        </div>


        <div className={styles.right}>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Python color="#ffffff"  size={40} className={styles.ico} />
              <C color="#ffffff"  size={40} className={styles.ico} />
              <Javascript color="#ffffff"  size={40} className={styles.ico} />
              <Cplusplus color="#ffffff"  size={40} className={styles.ico} />
              <Kotlin color="#ffffff"  size={40} className={styles.ico} />
              <Java color="#ffffff"  size={40} className={styles.ico} />
              <Html5 color="#ffffff"  size={40} className={styles.ico} />
              <CssThree color="#ffffff"  size={40} className={styles.ico} />
             
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Mysql color="#ffffff"  size={40} className={styles.ico} />
              <Databricks color="#ffffff"  size={40} className={styles.ico} />
              <Mongodb color="#ffffff"  size={40} className={styles.ico} />
              <Postman color="#ffffff"  size={40} className={styles.ico} />
              <Json color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <ReactJs color="#ffffff"  size={40} className={styles.ico} />
              <Nextdotjs color="#ffffff"  size={40} className={styles.ico} />
              <Django color="#ffffff"  size={40} className={styles.ico} />
              <Nodedotjs color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Vercel color="#ffffff"  size={40} className={styles.ico} />
              <Firebase color="#ffffff"  size={40} className={styles.ico} />
              <Git color="#ffffff"  size={40} className={styles.ico} />
              <Heroku color="#ffffff"  size={40} className={styles.ico} />
              <Netlify color="#ffffff"  size={40} className={styles.ico} />
              <Github color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Wordpress color="#ffffff"  size={40} className={styles.ico} />
              <Wix color="#ffffff"  size={40} className={styles.ico} />
              <Figma color="#ffffff"  size={40} className={styles.ico} />
              <Shopify color="#ffffff"  size={40} className={styles.ico} />
              <Blogger color="#ffffff"  size={40} className={styles.ico} />
              <Visualstudiocode color="#ffffff"  size={40} className={styles.ico} />
            </div>
          </div>
          <div className={styles.skillset} >
            <div className={styles.skills} >
              <Tableau color="#ffffff"  size={40} className={styles.ico} />
  
            </div>
          </div>
          


        </div>
        
    </div> 
    
  )
}

export default Exp;


