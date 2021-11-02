import "./App.css";
import data from "./assets/data.json";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {data.map((elem, index) => {
          return (
            <Content key={index} title={elem.category} images={elem.images} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
