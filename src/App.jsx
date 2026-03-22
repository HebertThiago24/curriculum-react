import Header from "./componentes/Header";
import Profile from "./componentes/Profile";
import Skills from "./componentes/Skills";
import Experience from "./componentes/Experience";
import Education from "./componentes/Education";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <div className="cv-container w-full max-w-5xl shadow-xl">
        {/* Sidebar */}
        <div className="sidebar">
          <Header />
          <Profile />
          <Skills />
        </div>

        {/* Conteúdo principal */}
        <div className="main-content">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
