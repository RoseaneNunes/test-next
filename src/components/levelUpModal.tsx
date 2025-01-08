import { useContext } from 'react'
import styles from '../styles/components/LevelUpModal.module.css'
import { ChallegesContext } from '../context/ChallengesContext'

export function LevelUpModal(){
    const{ level, closeLevelUpModal } = useContext(ChallegesContext)


    return(
        <div className= {styles.overlay}>
            <div className= {styles.container}>
                <header>{level}</header>

                <strong>parabéns</strong>
                <p>você alcançou um novo level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/x.png" alt ="Fechar modal" />
                </button>
            </div>
        </div>
        
    )
}