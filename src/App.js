import "./App.css";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
