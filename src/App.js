
import './App.css';
import {useEffect,useState,useContext} from "react"
import {DrinksProvider} from "./context/DrinksContext"
import DrinksContext from "./context/DrinksContext"
import Cards from './components/Cards';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ClickCard from './components/ClickCard';

function App() {
  
  return (
    <DrinksContext>
      <Router>
        <Switch>
          <Route exact path="/"/>
          <Route exact path="/Cards" component={Cards}/>
          <Route exact path="/Card/:ingrediente" component={ClickCard}/>
            <div className="App">
              <Cards/>
            </div>
        </Switch>
      </Router>
    </DrinksContext>
  );
}

export default App;



/* APIs+Context+Rutas

Armá la estructura completa (componentes/services/context), consumí la API:
https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
De allí obtendrás strIngredient1
El resultado de ese valor mostralo en una card.
Cuando hagas click en esa card tendrás que pegarle a esta api:
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<y_aca_va_strIngredient1>
Mostrá en una nueva página el nombre del trago junto con los 15 ingredientes que lleva. En caso de venir un ingrediente en null entonces no lo muestres.
 */