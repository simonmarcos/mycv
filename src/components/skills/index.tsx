import React from 'react';
import styles from '../styles/skills.module.css'

const SkillsComponent = (props: { listSkills: Array<string> }) => {
    return (
        <div className={styles.container}>
            <ul >
                {props.listSkills.map((skill, index) => {
                    return <li key={`index ${index}`}>{skill}</li>
                })}
            </ul>
        </div>
    );
}

export default SkillsComponent;