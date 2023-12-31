import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Category } from "./components/pages/Category";
import { NotFound } from "./components/pages/NotFound";
import { Recipe } from "./components/pages/Recipe";

import "./App.css";

function App() {
  return (
    <>
      <Router basename="/food_project" >
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
