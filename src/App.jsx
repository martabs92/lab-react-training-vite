import "./App.css";
import IdCard from "./components/ID/IdCard";
import Greetings from "./components/Greetings/Greetings";
// import Random from "./components/random/Random";

function App() {
  return (
    <div className='d-flex flex-column'>

      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg">
      </IdCard>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="es">Pepe</Greetings>
      {/* <Random min={1} max={6}/>
      <Random min={1} max={100}/> */}
      
    </div>
  )
}

export default App;
