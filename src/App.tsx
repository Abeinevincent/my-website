import { Button } from "@chakra-ui/react";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Button>Sample Button clicked: ButtonCountHere</Button>
    </div>
  );
}

export default App;
