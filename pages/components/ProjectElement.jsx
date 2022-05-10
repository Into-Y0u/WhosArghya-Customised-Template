import React from 'react';
import styles from '../../styles/Project.module.css';
import Link from 'next/link';
import {  CssThree, Django,  Firebase, Firefox, Github,  Html5, Javascript, Materialui,  Netlify, Nextdotjs, Python, ReactJs, Themoviedatabase, Vercel, Wordpress } from "@icons-pack/react-simple-icons";

const ProjectElement = ({data}) => {
  return (
    <div  className={styles.element}>
        <h2 className={styles.compTitle}>
            <Link href={data.deployedLink} passHref>
                <a target="_blank">{data.projTitle}</a>
            </Link>
        </h2>
        <div className={styles.tech} > 
            {data.techUsed}
            {/* <Nextdotjs color="#00ffff"  size={30} className={styles.ico}/> */}
   
        </div>
        <div className={styles.child}>
            <div className={styles.compRole}>
            <Link href={data.githubLink} passHref>
                <a target="_blank"><Github color="#ffffff"  size={30} className={styles.ico}/></a>
            </Link>
            </div>
            <div className={styles.compRole}>
            <Link href={data.deployedLink} passHref>
                <a target="_blank"><Firefox color="#f2f924"  size={30} className={styles.ico}/></a>
            </Link>
            </div>
        </div>
        <div>
            <p className={styles.compPara}>
                {data.projDesc}

            </p>
        </div>
    </div>
  )
}

export default ProjectElement