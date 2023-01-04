import './App.css';
import {GET_USER_DATA} from '../src/Graphql/queries';
import {useQuery} from '@apollo/client';
import Episodes from './Components/Episodes';
import Navigation from './Components/Navigation';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
 const {data}=useQuery(GET_USER_DATA);
 
  console.log(data);

  return (<>
    <div className="App">
     Rick and Morty
    </div>
  
  <p>List of the episodes information:-</p>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Episodes/>}/>
    <Route path="epinav/:id" element={<Navigation/>}/>
  </Routes>
  </BrowserRouter>
    
    
 

    </>
  );
}

export default App;
