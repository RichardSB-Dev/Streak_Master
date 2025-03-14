import { Home_Screen } from "./Pages/Home_Screen";
import { HabitProvider } from "./Context/HabitContext";

function App() {
  return (
    <>
      <HabitProvider>
        <Home_Screen />
      </HabitProvider>
    </>
  );
}

export default App;
