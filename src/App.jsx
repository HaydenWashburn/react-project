import { useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

function App(props) {
  let [list, setList] = useState(["ready", "set", "go"]);
  let [text, setText] = useState("");


  function onSubmit(event) {
    event.preventDefault();
    let newList = [...list, text];
    setList(newList);
    setText("");
  }
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(event) =>
              setText(event.target.value)
            }
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }

export default App;
