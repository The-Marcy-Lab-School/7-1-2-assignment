import { useState, useEffect } from 'react'
import RobotContext from './RobotContext'
import { handleFetch } from '../utils'

const RobotProvider = ({ children }) => {
    const [robots, setRobots] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch('http://localhost:4000/robots');
            if (data) setRobots(data);
            if (error) setError(error);
        }
        doFetch();
    }, [])

    const value = {
        robots
    }

    return (
        <RobotContext.Provider value={value}>
            {children}
        </RobotContext.Provider>
    )
}

export default RobotProvider