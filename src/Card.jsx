import { useState } from 'react';

export default function Card() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log("Cambiando tema a:", darkMode ? "Claro" : "Oscuro");
  };

  return (
    <div className={`max-w-sm mx-auto p-6 shadow-md rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-gray-200'}`}>
      <img
        className="rounded-full w-32 h-32 mx-auto mt-5"
        src="https://i.pravatar.cc/150?img=3"
        alt="avatar"
      />
      <h2 className={`mt-4 text-2xl font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        CARLOS GONZALEZ
      </h2>
      <p className={`mt-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Desarrollador Front-End apasionado por React.
      </p>
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4 py-2 rounded ${darkMode ? 'bg-white text-black' : 'bg-blue-500 text-gray-800'} transition`}
      >
        Cambiar tema
      </button>
    </div>
  );
}