import SearchImages from "./api"
import SearchBar from "./components/SearchBar"
import ImageList from './components/ImageList'
import { useState } from "react"


export default function App(){

const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        const result = await SearchImages(term)
        return setImages(result)
        
 }
    return(
        <div>
        <SearchBar onSubmit = {handleSubmit}/>
        <ImageList images = {images} />
        </div>
    )
}