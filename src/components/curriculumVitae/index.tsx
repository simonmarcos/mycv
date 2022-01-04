import React from 'react';
import SocialNetworksComponent from '../socialNetworks';
import WorksComponent from '../works';
import worksService from '../../services/worksService';
import { URL_WHATSAPP } from '../../utils/const';
import SkillsComponent from '../skills';
import ProfileComponent from '../profile';
import styles from '../styles/curriculumVitae.module.css';

const CurriculumVitaeComponent = () => {

    const worksResponse = worksService.getMyWorks();

    const Works = (): JSX.Element => {
        return (
            <div className={styles.works}>
                <hr className='' />
                <p>EXPERICIENCIA</p>
                <hr />
                {worksResponse.data.map((work, index) => {
                    return <WorksComponent
                        key={`index ${index}`}
                        title={work.title}
                        duration={work.duration}
                        description={work.description}
                    />
                })
                }
            </div>
        );
    }

    const MyProfile = (): JSX.Element => {
        return (
            <div className={styles.myProfile}>
                <ProfileComponent
                    name='Simón Solá Marcos Eduardo'
                    province='San Miguel de Tucumán'
                    birthDay='22/05/1993'
                    image='/assets/simonmarcos.png'
                />
            </div>
        );
    }

    const SocialMedia = (): JSX.Element => {
        return (
            <div className={styles.socialMedia}>
                <hr className={styles.separatorLine} />
                <h5>REDES SOCIALES</h5>
                <SocialNetworksComponent
                    image='whatsapp'
                    description='3816653329'
                    link={URL_WHATSAPP}
                />
                <SocialNetworksComponent
                    image='gmail'
                    description='marcoseduardosimon@gmail.com'
                    link='marcoseduardosimon@gmail.com'
                />
                <SocialNetworksComponent
                    image='linkedin'
                    description='https://www.linkedin.com/in/marcos-eduardo-simon-4aabb0119/'
                    link='https://www.linkedin.com/in/marcos-eduardo-simon-4aabb0119/'
                />
                <SocialNetworksComponent
                    image='git'
                    description='https://github.com/simonmarcos'
                    link='https://github.com/simonmarcos'
                />

            </div>
        );
    }

    const Aptitudes = (): JSX.Element => {

        const listAptitudes: Array<string> = [
            'Autodidacta',
            'Proactividad',
            'Adaptabilidad',
            'Capacidad de análisis',
            'Responsabilidad',
            'Comunicación',
            'Trabajo en equipo'
        ];

        return (
            <div className={styles.aptitudes}>
                <hr className={styles.separatorLine} />
                <h5>APTITUDES</h5>
                <SkillsComponent
                    listSkills={listAptitudes} />
            </div>
        );
    }

    const Knowledge = (): JSX.Element => {

        const listKnowledge: Array<string> = [
            'Ingles Técnico',
            'Java SE – Spring Boot – JPA - Hibernate',
            'Android Studio',
            'React JS',
            'Node JS',
            'Git',
            'HTML – CSS - Bootstrap',
            'MYSQL',
            'Metodologías Ágil',
            'RPA (UIPath)'
        ];

        return (
            <div className={styles.aptitudes}>
                <hr className={styles.separatorLine} />
                <h5>CONOCIMIENTOS</h5>
                <SkillsComponent
                    listSkills={listKnowledge} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.columnLeft}>
                <hr className={styles.separatorLine} />
                <MyProfile />
                <SocialMedia />
                <Aptitudes />
                <Knowledge />
                <hr className={styles.separatorLine} />
            </div>
            <div className={styles.columnRight}>
                <Works />
            </div>
        </div>
    );
}

export default CurriculumVitaeComponent;