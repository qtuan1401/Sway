import BiasDisplay from './components/BiasDisplay'

function App() {
  const descText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod lacinia at. Quis eleifend quam adipiscing."

  return (
    <>
      <BiasDisplay headerText="Political Bias" desc={descText} leftLabel="Low" rightLabel="High" barPercent="30%"/>
    </>
  );
}

export default App;
