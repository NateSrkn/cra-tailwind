import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] motion-safe:animate-[spin_20s_linear_infinite] pointer-events-none"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="flex gap-4">
          <a
            className="text-[#61dafb]"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="text-[#61dafb]"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tailwind
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
