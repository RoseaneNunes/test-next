import levelup from '../../public/icons/icon.png'
import icon from '../../public/icons/muscle (1).png'
import Image from 'next/image';
import styles from '../styles/components/ChallegerBox.module.css';
import { useContext } from 'react';
import { ChallegesContext } from '../context/ChallengesContext';
import { CountDownContext } from '../context/CountDownContext';


   
   export function ChallegerBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallegesContext);
    const {resetCountDown} = useContext(CountDownContext);
        function handleChellengeSucceeded(){
            completeChallenge()
            resetCountDown()
            
        }

        function handleChellengeFailed(){
            resetChallenge()
            resetCountDown()
        }

        return(
            <div className={styles.ChallegerBoxContainer}>
                { activeChallenge ? (
                    <div className={styles.ChallegerActive}>
                        <header> Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <Image
                             src= {icon}
                             alt= " " />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button type="button" 
                            className={styles.challegerFailedButon}
                            onClick={handleChellengeFailed}
                            >
                                Falhei
                            </button>
                            <button type="button"
                            className={styles.challegerSuceededButon}
                            onClick={handleChellengeSucceeded}
                            >
                                Completed
                            </button>
                        </footer>
                    </div>
                    
                ):(
                    <div className={styles.ChallegerNoActive}>
                    <strong> Finalize um ciclo para receber desafios a serem completados </strong>
                    <p>
                        <Image
                         src={levelup} alt="level Up"/>
                        Avance de level completando desafios.
                    </p>
                </div>
                )}
                
            </div>
        )
    }
