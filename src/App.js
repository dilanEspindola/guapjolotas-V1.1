import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserProvider } from "./context/UserContext";
import { Bebidas } from "./pages/Bebidas";
import { Tamales } from "./pages/Tamales";
import { Guajolotas } from "./pages/Guajolotas";
import { ProductoId } from "./pages/ProductoId";
import { Buscador } from "./pages/Buscador";
import { DataProvider } from "./context/DataContext";
import { CarritoProvider } from "./context/CarritoContext";
import { RutasProtegidas } from "./components/RutasProtegidas";
import { LoginRegisterProtegidos } from "./components/LoginRegisterProtegidos";
import { CarritoPage } from "./pages/CarritoPage";

import "./App.css";
import { Pagar } from "./pages/Pagar";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <DataProvider>
          <CarritoProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RutasProtegidas>
                    <Guajolotas />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/register"
                element={
                  <LoginRegisterProtegidos>
                    <Register />
                  </LoginRegisterProtegidos>
                }
              />
              <Route
                path="/login"
                element={
                  <LoginRegisterProtegidos>
                    <Login />
                  </LoginRegisterProtegidos>
                }
              />
              <Route
                path="/bebidas"
                element={
                  <RutasProtegidas>
                    <Bebidas />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/tamales"
                element={
                  <RutasProtegidas>
                    <Tamales />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/buscador"
                element={
                  <RutasProtegidas>
                    <Buscador />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/:productoId"
                element={
                  <RutasProtegidas>
                    <ProductoId />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/carrito"
                element={
                  <RutasProtegidas>
                    <CarritoPage />
                  </RutasProtegidas>
                }
              />
              <Route
                path="/pagar"
                element={
                  <RutasProtegidas>
                    <Pagar />
                  </RutasProtegidas>
                }
              />
            </Routes>
          </CarritoProvider>
        </DataProvider>
      </UserProvider>
    </div>
  );
}

export default App;
