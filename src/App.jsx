import "./App.css";
import IdCard from "./components/ID/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/random/Random";
import BoxColor from "./components/BoxColor/BoxColor"

function App() {
  return (
    <div className='app'>

      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg">
      </IdCard>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="es">François</Greetings>
      
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />  
    </div>
  )
}

export default App;
