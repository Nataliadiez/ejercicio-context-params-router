
import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import DrinksContext, { DrinksProvider } from '../context/DrinksContext'

const ClickCard = () => {
    const {bebidas} = useContext(DrinksProvider)
    const params = useParams()
    console.log(params)
    console.log(params.strIngredient1)

    return (
        <div>
            
        </div>
    )
}

export default ClickCard
