
import { useContext } from 'react';
import styles from '../styles/components/CountDown.module.css'
import { CountDownContext } from '../context/CountDownContext';



export function CountDown(){
    const {
        minutes,
        second,
        hasFinished,
        Isactive,
        startCountDown,
        resetCountDown 
    } = useContext(CountDownContext)

    const [leftsecond,rigthsecond] = String(second).padStart(2,"0").split(' ');
    const [leftminute,rigthminute] = String(minutes).padStart(2,"0").split(' ');

    return(
  <div>
        <div className={styles.CountDownContainer}>
            <div>
                <span>{leftminute}</span>
                <span>{rigthminute}</span>
            </div>
            <span>:</span>
            <div>
                <span>{leftsecond}</span>
                <span>{rigthsecond}</span>
            </div>
        </div>
        
        { hasFinished ?( 
            <p><button
            disabled
            className={styles.countdownButton}
            
              >
                Ciclo encerador
            </button></p>
        ): (
            <>
                {Isactive ? (
            <button type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountDown}
            >
            Abandonar ciclo
           
            </button>
            ) :(
                <button type="button" 
            className={styles.countdownButton}
            onClick={startCountDown}
            >
            Iniciar ciclo
                
            </button>
            
        )}
            </>
        ) }
    </div>
    );
}