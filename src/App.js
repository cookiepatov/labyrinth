import Field from './elements/Field';
import {startingParameters} from './utils/constants';
import './css/pages/index.css'
import Moves from './elements/Moves';

function App() {
  return (
    <div className="App">
      <Field parameters={startingParameters}/>
      <Moves parameters={startingParameters}/>
    </div>
  );
}

export default App;
