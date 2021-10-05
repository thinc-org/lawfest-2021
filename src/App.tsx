import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { styled } from "./config/theme/stitches.config"

const SampleText = styled("p", {
  color: "$text_white_tertiary",
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SampleText>Hello World</SampleText>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
