"use client";
// Importamos los componentes necesarios
import React, { useState } from "react";
import Menu from "./components/Menu";
import ResumenPedido from "./components/ResumenPedido";
import CarritoPedidos from "./components/CarritoPedidos";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (platillo) => {
    setCarrito((prevCarrito) => {
      const itemExistente = prevCarrito.find((item) => item.id === platillo.id);
      if (itemExistente) {
        return prevCarrito.map((item) =>
          item.id === platillo.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...platillo, cantidad: 1 }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (index) => {
    setCarrito((prevCarrito) => prevCarrito.filter((_, i) => i !== index));
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-white">
      <header className="text-center py-4">
        <h1>Reserva de Mesas</h1>
      </header>
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-4">
        <div className="w-100" style={{ maxWidth: "900px" }}>
          {mensaje && (
            <div
              className={`alert ${
                mensaje.includes("Error") ? "alert-danger" : "alert-success"
              } w-75 mx-auto text-center animate__animated animate__fadeIn`}
            >
              {mensaje}
            </div>
          )}
          <Menu agregarAlCarrito={agregarAlCarrito} />
          <ResumenPedido carrito={carrito} />
          <CarritoPedidos carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
        </div>
      </main>
    </div>
  );
}

export default App;