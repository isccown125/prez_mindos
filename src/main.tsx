import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./index.css";
import "./slides.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("reveal") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
