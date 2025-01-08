import styles from '../styles/pages/home.module.css';
import {GetServerSideProps} from 'next';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/perfil';
import { CompletedChallenges } from '../components/CompletedChanllenges';
import {CountDown} from '../components/CountDown';
import Head from 'next/head';
import { ChallegerBox } from '../components/ChallengerBox';
import { CountDownProvider } from '../context/CountDownContext';
import { ChallengesProvider } from '../context/ChallengesContext';

interface HomeProps {
  level: number,
  challengesCompleted: number,
  currentExperience: number
}

export default function Home(props) {
 
     return (
      <ChallengesProvider
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
      >
    <div className = {styles.container}>
      <Head>
        <title>inicio | move.it</title>
      </Head>
      <ExperienceBar/>
        <CountDownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
          
        </div>
        <div>
          <ChallegerBox/>
        </div>
      </section>
      </CountDownProvider>
    </div>
    </ChallengesProvider>
  );
  
 
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    challengesCompleted: 2,
    currentExperience: 50
  }
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;


  return{
    props:{
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
   }
  }
} 
