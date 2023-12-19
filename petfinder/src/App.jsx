import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [pets, setPets] = useState([])

  useEffect (() => {
    const fetchpets = async () => {
      const {data} = await axios.get("http://localhost:3000/api/pets")
      console.log(data)
      setPets(data)
    }
    fetchpets()
  })

  return (
    <div>
      <h1>List of Pets ({pets.length}):</h1>
      {
        pets.map((pet) => {
          return (
            <div key={pet.id} className={pet.is_favorite ? "favorite" : ""}>{pet.name}</div>
          )
        })
      }
    </div>
  )
}

export default App
