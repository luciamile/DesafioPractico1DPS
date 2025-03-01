import React from 'react';

const Menu = ({ agregarAlCarrito }) => {
  const platillos = [
    { id: 1, nombre: 'Tacos de Res', precio: 10, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4ciwBiKtbHZFX5GIURhwNVXBArHn7i_qWw&s' },
    { id: 2, nombre: 'Mini Box', precio: 15, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNUQ8HTQ0lcwN2jOmPe_Bx2oqZK9fBeOVJg&s' },
    { id: 3, nombre: 'Tipico Salvadoreño', precio: 20, imagen: 'https://www.cocinadelirante.com/sites/default/files/images/2024/04/recetas-economicas-y-saludables-para-todos-los-dias-de-la-semana.jpg' },
    { id: 4, nombre: 'Pasta de la casa', precio: 25, imagen: 'https://cdn.colombia.com/sdi/2019/03/05/recetas-con-pasta-716227.jpg' },
    { id: 5, nombre: 'Sopon', precio: 15, imagen: 'https://assets.unileversolutions.com/recipes-v2/243547.jpg' },
  ];

  return (
    <div>
      <h2>Menú</h2>
      <div className="menu-grid">
        {platillos.map((platillo) => (
          <div key={platillo.id} className="menu-item">
            <img src={platillo.imagen} alt={platillo.nombre} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{platillo.nombre}</h3>
              <p>${platillo.precio}</p>
              <button className="btn btn-primary" onClick={() => agregarAlCarrito(platillo)}>Agregar</button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }
        .menu-item {
          background: #ffefd5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          text-align: center;
          border: 2px solid #d35400;
        }
        .menu-item-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .menu-item-details {
          padding: 10px;
        }
        .menu-item-details h3 {
          margin: 10px 0;
          color: #000;
        }
        .menu-item-details p {
          margin: 5px 0;
          color: #000;
          font-weight: bold;
        }
        .btn {
          background-color: #e67e22;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 4px;
          font-weight: bold;
        }
        .btn:hover {
          background-color: #d35400;
        }
      `}</style>
    </div>
  );
};

export default Menu;
