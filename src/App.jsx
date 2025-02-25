import Header from './components/Header';
import Hero from "./components/Hero";
import {store } from "./redux/store"
import { useSelector } from 'react-redux';

function App() {
const menuIndex = useSelector((state) => state.menuIndex);

console.log('Initial State:', store.getState());
console.log("Table index for MENU:", menuIndex); 

return (
    <>
    <Header />
    <Hero tableIndex={menuIndex} /> 
    </>
  )
}

export default App
