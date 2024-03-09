
import './App.css';
import Navigation from "./navigation"
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </div>
  );
}

export default App;
