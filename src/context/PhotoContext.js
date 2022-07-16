import { createContext, useState } from "react";
import axios from "axios";

export const PhotoContext = createContext();

function PhotoContextProvider({children}) {

    const[photos, setPhotos] = useState([])
    const[loading, setLoading] = useState(true)

    const runSearch = (searchTerm, page) => {
        // console.log(page)
        // console.log(searchTerm)
        
       axios({
           url: "https://api.unsplash.com/search/photos?per_page=12&page="+page+"&query="+searchTerm,
           method: "GET",
           headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Client-ID pjOzS4h025khKoZG5h5KK3UcgLkjUzJx_XyoMjL2Vmo',
           }, 
           responseType: 'json'
       }) 
       .then(response => {
           if(response.status === 200){
                setPhotos(response.data.results)
                setLoading(false)
           }
       })
       .catch(error => {
           console.log(error)
       })
    }

    return (
        <PhotoContext.Provider value={{ photos, runSearch, loading}}>
            {children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider;