const { createContext, useState, useContext } = require("react");

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    return setMenuOpen(!menuOpen);
  }
  
  return (
    <LocalStateProvider value={{ menuOpen, setMenuOpen, toggleMenu }}>
      {children}
    </LocalStateProvider>
  )
}

function useMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };