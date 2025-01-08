import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie'
import { LevelUpModal } from "../components/levelUpModal";


interface Challenge {
    type: string;
    description: string;
    amount: number;
}

interface ChallengesConextData{
    level:number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    closeLevelUpModal: ()=> void;
    levelUp:() => void;
    startNewChalleges: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    
     

}

interface ChallengesProviderProps{
    children: ReactNode;
    level: number,
    challengesCompleted: number,
    currentExperience: number
}

  

export const ChallegesContext = createContext({} as ChallengesConextData);

export function ChallengesProvider({
    children, 
    ...rest
    }: ChallengesProviderProps ){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const[activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1)*4,2)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
       Cookies.set('level', String(level));
       Cookies.set('currentExperience', String(currentExperience));
       Cookies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted])


    function levelUp( ) { 
         setLevel(level + 1)
         setIsLevelUpModalOpen(true)
        }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false)
    }

    function startNewChalleges(){
        const randonChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randonChallengesIndex];
        
        setActiveChallenge(challenge);

        new Audio('/notication.mp3').play();

        if (Notification.permission == 'granted'){
            new Notification('novo desafio',
                {body: `valendo ${challenge.amount}xp!`}
                
            )
        }
    }  
    
    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!setActiveChallenge){
            return;
        }
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setchallengesCompleted(challengesCompleted + 1)
    }
 
    return(
        <ChallegesContext.Provider value={{ 
            level,
            currentExperience, 
            challengesCompleted, 
            experienceToNextLevel,
            levelUp,
            startNewChalleges,
            activeChallenge,
            resetChallenge,
            completeChallenge,
            closeLevelUpModal
            }}>
            {children}
           { isLevelUpModalOpen && <LevelUpModal/>}
        </ChallegesContext.Provider>
    );
}