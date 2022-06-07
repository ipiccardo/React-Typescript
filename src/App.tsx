import Counter from './components/Counter'
import TimerPadre from './components/TimerPadre';
import Usuario from './components/Usuario';
import ContadorRed from './components/ContadorRed';
import Formulario from './components/Formulario';
import FormularioDos from './components/Formulario2';
import Todo from './todo/interfaces/Todo';

function App() {
  return (
    <div className="App">
        <h1>React + typescript</h1>
        <hr />

        <Counter />

        <Usuario />

        <h2>useEffect - useRef</h2>
        <hr />

        {/* <TimerPadre /> */}

        <h2> useReducer </h2>
        <hr />
        <ContadorRed />

        <hr />
        <h2> CustomHooks </h2>
        <hr />
        
        <Formulario />
        
        <br/>
        <br/>
        <br/>


        <FormularioDos />

        <br/>
        <br/>
        <br/>


        <Todo />

        <br/>
        <br/>
        <br/>


    </div>
  );
}

export default App;
