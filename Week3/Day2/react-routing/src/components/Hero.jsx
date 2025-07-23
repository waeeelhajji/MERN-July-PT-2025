import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const hero = () => {

    const nav = useNavigate()
    const { Lyna } = useParams()
    const [oneHero, setOneHero] = useState(null)
    console.log(Lyna)



    const GoHome = () => {
        nav("/home")

    }
    useEffect(() => {
        // axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/" + Lyna + ".json")
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${Lyna}.json`)
            .then(response => {
                //! always your response it will be inside .data
                console.log(response.data)
                setOneHero(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <fieldset>
            <legend>hero 🦸‍♂️🦸‍♀️</legend>
            <h4>{Lyna}</h4>
            {
                oneHero ? (
                    <>
                        <h3>{oneHero.name}</h3>
                        <img src={oneHero.images.sm} alt={oneHero.name} />
                    </>
                ) :
                    <h1>no Hero</h1>
            }
            <br />
            <button onClick={GoHome}> Go Back Home</button>

        </fieldset>
    )
}

export default hero