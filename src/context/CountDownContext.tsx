import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallegesContext } from "./ChallengesContext";

interface ChallegesContextData{
    minutes: number;
    second: number;
    hasFinished: boolean;
    Isactive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownProviderProps{
    children: ReactNode;
}

export const CountDownContext = createContext({}as  ChallegesContextData)

let CountDownTimeout: NodeJS.Timeout;

export function CountDownProvider({children}: CountDownProviderProps){
  
   const {startNewChalleges} = useContext(ChallegesContext);
           
    const [time,setTime] = useState(0.1*60);
    const [Isactive, setActive]= useState(false);
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes = Math.floor (time /60);
    const second = time % 60;

    function startCountDown(){
            setActive(true);
        }
    
    function resetCountDown(){
         clearTimeout(CountDownTimeout);
         setActive(false);
         setTime(0.1*60);
         setHasFinished(false);
        }
    
    
    
        useEffect(() => {
            if(Isactive && time > 0){
                CountDownTimeout = setTimeout(() => {
                    setTime(time - 1);
                }, 1000 )
            }else if (Isactive && time == 0 ){
                setHasFinished(true);
                setActive(false);
                startNewChalleges();
                
            }
    
        }, [Isactive, time])
    return(
        <CountDownContext.Provider value = {{
            minutes,
            second,
            hasFinished,
            Isactive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}