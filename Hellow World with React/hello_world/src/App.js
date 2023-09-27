import './App.css';

function App() {
  const datetime = new Date();

  return (
    <div id = "hello-world">
      <p>Hello, Jeph Mari Daligdig!</p>
      <p>The time is {datetime.toLocaleDateString() +" "+ datetime.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;