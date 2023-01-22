import { useState } from "react";
import "./App.css";
import App1 from "./App1";
import App2 from "./App2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <article class="card">
        <App1 />
        <section class="card__body">
          <p class="card__text">
            Victor Crest
            <spam class="card__text card__text--light">26</spam>
          </p>
          <p class="card__text card__text--light">London</p>
        </section>
        <App2 />
      </article>
    </div>
  );
}

export default App;
