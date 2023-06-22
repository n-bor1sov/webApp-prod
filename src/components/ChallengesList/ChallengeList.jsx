import React, { useState } from "react"
import './ChallengeList.css'
import Challenge from "../Challenge/Challenge";
import Challenge from "../Challenge/Challenge";
import { useTelegram } from "../../hooks/useTelegram";


// const dataBase = {
//     users: [ {id: 894797521, 
//         allChallenges: [{progress: 5, need: 10, isFinished: false}, {progress: 10, need: 10, isFinished: false}]
//     }
//     ]
// }
const challenges = [
    {id: 0, title:"Swimmer", description: "Get 10 hours in the swimming pool", points: 10},
    {id: 1, title:"MJ", description: "Get 10 hours on the Basketball", points: 15},
]

const ChallengeList = () => {

    // const [inProcess, finished] = useState([]);

    //const {user} = useTelegram();

    //const client = dataBase.users.find(u => u.id == user?.id)

    // const finish = (challenge) => {
        
        
    // }

    return (
        <div className={"list"}>
            {challenges.map(item => (
                <Challenge
                    challenge = {item}
                    points = {item.points}
                    title = {item.title}
                    className={'item'}
                    description={item.description}
                />
            ))}        
        </div>
  )
};

export default ChallengeList;