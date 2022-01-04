import React from 'react';
import { isRegularExpressionLiteral } from 'typescript';
import { SocialMedia } from '../../utils/const';
import styles from '../styles/socialNetworks.module.css';

const SocialNetworksComponent = (props: { description: string, image: SocialMedia, link: string }) => {

    const validateIcons = () => {
        let image = '';
        if (props.image === 'gmail') {
            image = 'icons8-gmail-64.png';
        } else if (props.image === 'linkedin') {
            image = 'linkedin.png';
        } else if (props.image === 'git') {
            image = 'git.png';
        }
        else if (props.image === 'whatsapp') {
            image = 'whatsapp.png';
        }
        return `/assets/${image}`;
    }


    return (
        <div className={styles.container}>
            <a target="_blank" rel="socialMedia" href={props.link}>
                <img alt={props.image} className={styles.img} src={validateIcons()} />
            </a>
        </div>
    );
}

export default SocialNetworksComponent;