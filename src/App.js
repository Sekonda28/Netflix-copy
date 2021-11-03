import "./App.css";
import data from "./assets/data.json";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {data.map((elem, index) => {
          return (
            <Section key={index} title={elem.category} images={elem.images} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
