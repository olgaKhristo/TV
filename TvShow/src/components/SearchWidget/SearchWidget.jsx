import React, {useState, useEffect} from 'react'
import ShowCard from '../ShowCard/ShowCard'


export default function SearchWidget() {
const [inputValue, setInputValue] = useState('')
const [searchValue, setSearchValue] = useState('')
const [showData, setShowData] = useState([])

useEffect(() => {
    async function searchAPI(){
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
        const data = await response.json()
        const newData = data.map((s) => s.show)
        setShowData(newData)
    }  
    searchAPI() 

}, [searchValue])

function handleInput(event){
    const newInput = event.target.value
    setInputValue(newInput)
}
function handleSubmit(event){
    event.preventDefault()
    setSearchValue(inputValue)
    setInputValue('')
}

  return (
    <>
     <form onSubmit={handleSubmit}>
     <input value={inputValue} type="text" onChange={handleInput} required/>
     <input type="submit" value="Search"/>
     </form>

     {

        showData.map((show) =>(show.image ? <ShowCard  show={show} key={show.id}/> : ""))
     }
    </>

  )
}