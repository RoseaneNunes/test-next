import { useContext } from 'react';
import { ChallegesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){ 
    const {currentExperience, experienceToNextLevel} = useContext(ChallegesContext);

    const percentToNextLevel = Math.round(currentExperience*100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
               <div style={{ width: `${percentToNextLevel}% ` }}>
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}% `}}>
                    {currentExperience} xp
                    </span>
                </div> 
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}

