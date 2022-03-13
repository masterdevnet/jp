import React, { useState, useEffect } from "react";

function App() {

  const getProdutos = async () => {
    fetch('http://localhost/apijpautocenter/index.php')
    .then((response) => response.json())
    .then((responseJson) => (
      console.log(responseJson)
    ))
  }

  useEffect(() => {
    getProdutos()
  },[])

  return (
    <div>
      <h1>Listar Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Data da Compra</th>
            <th>Estoque</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
