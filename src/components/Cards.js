import React,{useEffect,useState,useContext} from 'react'
import { DrinksProvider } from '../context/DrinksContext'
import { Link,Router } from 'react-router-dom'
import Axios from 'axios'



const Cards = () => {
    const {bebidas} = useContext(DrinksProvider)
    const [ingrediente, setIngrediente] = useState([])

    useEffect(() => {
        {bebidas?.map((b)=> {
            
                Axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${b.strIngredient1}`
                    
                ).then((response)=> {
                    setIngrediente(Array.isArray(response.data.drinks) ? response.data.drinks : [])
                    console.log("despues del then",response)
                })
        
        })}

    }, [])
    
    console.log("fuera del map",ingrediente)
    

    return (
        
            <Link to="/Cards">
                <div>
                    {bebidas?.map((b)=> {
                        return (
                            <>
                        
                            <div class="card">
                                <div class="card-body">
                                {b.strIngredient1}
                                </div>
                            </div>
                            
                            </>
                        )
                        
                    })}
                </div>
            </Link>
        
    )
}

export default Cards
