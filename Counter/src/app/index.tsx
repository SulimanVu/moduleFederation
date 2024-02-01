import AppRouter from "../providers/AppRouter";
import ThemeProvider from "../theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter></AppRouter>
    </ThemeProvider>
  );
};

export default App;
