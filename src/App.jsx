import "./App.css";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./components/AppContext";
import ThemeToggle from "./components/ThemeToggle";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <List />
      <AppProvider>
        <div className="container mt-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Theme App</h2>

            <div className="text-center">
              <ThemeToggle />
            </div>

            <StudentCard />
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
