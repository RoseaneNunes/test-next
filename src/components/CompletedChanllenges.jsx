import { useContext } from 'react';
import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallegesContext } from '../context/ChallengesContext';

export function CompletedChallenges(){
    const {challengesCompleted} = useContext(ChallegesContext)

    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}