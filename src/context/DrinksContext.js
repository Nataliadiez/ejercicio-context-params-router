import React,{useState,useEffect,createContext} from 'react'
import Axios from "axios"

const DrinksProvider = createContext();
const DrinksContext = ({children}) => {

    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {
        Axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
            
        ).then((response)=> {
            setBebidas(Array.isArray(response.data.drinks) ? response.data.drinks : [])
            console.log(bebidas)
        })

    }, [])

    

    

    return (
        <DrinksProvider.Provider value={{bebidas}}>{children}</DrinksProvider.Provider>
    )
}

export default DrinksContext
export {DrinksProvider}

