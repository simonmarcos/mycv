import React from 'react';
import styles from '../styles/works.module.css';

const WorksComponent = (props: { title: string; duration: string; description: string }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.duration}>{props.duration}</div>
            <div className={styles.description}>{props.description}</div>
        </div>
    )
}

export default WorksComponent;