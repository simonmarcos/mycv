import React from 'react';
import styles from '../styles/profile.module.css';

const ProfileComponent = (props: { name: string; province: string; birthDay: string; image: string }) => {
    return (
        <div>
            <img alt={props.image} className={styles.img} src='/assets/simonmarcos.png' />
            <div>
                <p className={styles.description}>
                    {props.name}
                    <br />
                    {props.province}
                    <br />
                    {props.birthDay}
                </p>
            </div>
        </div>
    );
}

export default ProfileComponent;