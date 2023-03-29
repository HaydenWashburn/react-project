import { Component } from "react";
import "./App.css";
import FilmsList  from "./components/filmsList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["ready", "set", "go"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault()
    let newList = [...this.state.list, this.state.text]
    this.setState({
      list: newList,
      text: ""
    })
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <form onSubmit = {this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={(event) =>
              this.setState({
                text: event.target.value,
              })
            }
          ></input>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;
