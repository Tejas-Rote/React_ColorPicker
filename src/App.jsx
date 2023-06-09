import "./App.css";
import ColorPicker from "./components/ColorPicker";

function App() {
  const colors = [
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "silver",
    "gold",
    "brown",
  ];

  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
