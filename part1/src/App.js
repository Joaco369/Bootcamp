import './App.css';
import Message from "./Message.js"

const Description = () => {
  return <p>Esto es una prueba</p>
}

function App() {
  return (
    <div className="App">
      <Message message="Estamos trabajando"/>
      <Message message="en el curso"/>
      <Message message="de React"/>
      <Description />
    </div>
  );
}

export default App;
