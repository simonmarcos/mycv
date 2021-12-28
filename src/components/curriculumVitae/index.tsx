import React from 'react';
import SocialNetworksComponent from '../../components/socialNetworks';
import WorksComponent from '../../components/works';
import worksService from '../../services/worksService';
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
                <SocialNetworksComponent
                    image='gmail'
                    description='MARCOSEDUARDOSIMON@GMAIL.COM'
                />
                <SocialNetworksComponent
                    image='linkedin'
                    description='https://www.linkedin.com/in/marcos-eduardo-simon-4aabb0119/'
                />
                <SocialNetworksComponent
                    image='git'
                    description='https://github.com/simonmarcos'
                />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.columnLeft}>
                <hr className={styles.separatorLine} />
                <MyProfile />
                <SocialMedia />
                <hr className={styles.separatorLine} />
            </div>
            <div className={styles.columnRight}>
                <Works />
            </div>
        </div>
    );
}

export default CurriculumVitaeComponent;