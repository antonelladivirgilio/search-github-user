import React from "react";
import ReactDOM from "react-dom";

// Components
import Form from "./components/Form";
import CardList from "./components/CardList";

// Data
import { testData } from "./data";

// Styles
import "./styles.css";

// function App() {

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    profiles: testData
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    console.log(" console.log(testData);", testData);
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
