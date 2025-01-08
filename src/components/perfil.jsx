import levell from '../../public/icons/icon.png'
import Image from 'next/image';
import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallegesContext } from '../context/ChallengesContext';

export function Profile(){
    const {level} = useContext(ChallegesContext);
    return(
        <div className={styles.profileContainer}>
            <img
            src = "https://github.com/RoseaneNunes.png"
            alt= "Roseane Nunes"
            width={24}
            height ={24}
            />
            <div>
                <strong>Roseane Nunes</strong>
                <Image
                src = {levell} 
                alt="level"
                />
                <p>level {level}</p>
            </div>
        </div>
    )
}
