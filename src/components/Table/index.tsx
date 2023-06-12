import React, { useState } from "react";
import { WrapTable } from "./styles";

const Table = ({ items, total, updatePage, columns, sortTable }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [sortOrder, setSortOrder] = useState(true);
  const [sortColumn, setSortColumn] = useState("");

  const sortItems = (column: any) => {
    let order = true;
    if (sortColumn === column && sortOrder === true) {
      order = false;
    }

    setSortColumn(column);
    setSortOrder(order);
    
    sortTable(column, order)
    console.log(order, column);
  };

  // Função para alterar a página atual
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    updatePage(page);
  };

  // Obtém os itens a serem exibidos com base na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <WrapTable>
        <thead>
          <tr>
            {columns.map((column: any) => {
              return (
                <th
                  key={column.id}
                  onClick={() => sortItems(column.name)}
                  className="th-container"
                >
                  {column.name == 'editar' ? '' : column.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td><a href={`${item.id}`}>Editar</a></td>
              </tr>
            )
          })}
        </tbody>
      </WrapTable>
      <div>
        {/* Cria os botões de paginação */}
        {Array.from(
          { length: Math.ceil(total / itemsPerPage) },
          (_, index) => index + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{ marginLeft: 4 }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
