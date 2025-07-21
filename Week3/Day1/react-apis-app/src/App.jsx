import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  //! State
  const [Heroes, setHeroes] = useState([])


  const fetchHeroes = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(resApi => {
        return resApi.json()
      }).then(actualApiRes => {
        console.log(actualApiRes)
        setHeroes(actualApiRes)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const AxiosHeroes = () => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(res => {
        //! the data that you want is always be inside .data
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    AxiosHeroes()
  }, [])


  return (
    <>
      <h1>superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <button onClick={fetchHeroes}>Fetch Heroes</button>
      <button onClick={AxiosHeroes}>Axios Heroes</button>
      {/* {JSON.stringify(Heroes)} */}

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            Heroes.map((Hero) => {
              return (
                <tr>
                  <td><img src={Hero.images.sm} alt={Hero.name} /></td>
                  <td>{Hero.name}</td>
                  <td>{Hero.biography.fullName}</td>
                  <td>{Hero.biography.publisher}</td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
