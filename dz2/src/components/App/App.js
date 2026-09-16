import Header from '../Header/Header';
import Section from '../Section/Section';
import './App.css';

function App(props) {
  let {navigation, mz} = props;
  return (
    <div className="App">
      <Header navigation={navigation}/>
      <Section mz={mz}/>
    </div>
  );
}

export default App;
