import React from 'react';
import { SocialMedia } from '../../utils/const';
import styles from '../styles/socialNetworks.module.css';

const SocialNetworksComponent = (props: { description: string, image: SocialMedia }) => {

    const validateIcons = () => {
        let image = '';
        if (props.image === 'gmail') {
            image = 'icons8-gmail-64.png';
        } else if (props.image === 'linkedin') {
            image = 'linkedin.png';
        } else if (props.image === 'git') {
            image = 'git.png';
        }
        return `/assets/${image}`;
    }

    return (
        <div className={styles.container}>
            <img alt={props.image} className={styles.img} src={validateIcons()} />
            <div><p className={styles.description}>{props.description}</p></div>
        </div>
    );
}

export default SocialNetworksComponent;