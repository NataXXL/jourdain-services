import "./App.css";
import ProjectsFilter from "./components/ProjectsFilter";
import Services from "./components/Services";

function App() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "1.5rem" }}>
      <h1>Mon portfolio</h1>
      <Services />
      <ProjectsFilter />
    </main>
  );
}

export default App;
