import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pures/greeting';
// import GreetingF from './components/pures/greetingF.jsx';
import TaskListComponent from './components/containers/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio .jsx */}
        {/* <Greeting name="Martin
        "></Greeting> */}
        {/* Componente ejemplo funcional */}
        {/* <GreetingF name="Martin"></GreetingF> */}

        {/* componente de listado de Tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
