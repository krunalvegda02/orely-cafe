import Header from './components/Header';
import Hero from "./components/Hero";
import { useSelector } from 'react-redux';
import {store } from "./redux/store"
 function App() {

const tableIndex = useSelector((state) => state.tables);
console.log('Initial State:', store.getState());
console.log("table index For MENU:", tableIndex); 
return (
    <>
    <Header />
    <Hero tableIndex={tableIndex} /> 
    
    </>
  )
}

export default App
