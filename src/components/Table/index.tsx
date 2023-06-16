import React, { useState } from "react";
import { WrapTable } from "./styles";

const Table = ({ data, total, updatePage, columns, sortTable, isEditable }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState(true);
  const [sortColumn, setSortColumn] = useState("");

  const sortItems = (column: any) => {
    let order = true;
    if (sortColumn === column && sortOrder === true) {
      order = false;
    }

    setSortColumn(column);
    setSortOrder(order);

    sortTable(column, order);
    console.log(order, column);
  };

  // Função para alterar a página atual
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    updatePage(page);
  };

  return (
    <div>
      <WrapTable>
        <thead>
          <tr>
            {Object.keys(data.results[0]).map((key) => {
              let find = columns.find((coluna: any) => coluna.name == key);
              if (find) {
                return <th key={key} onClick={() => sortItems(find.name)}>{find.label}</th>;
              } 
            })}
            {isEditable ?? <th>Editar</th>}
            
          </tr>
        </thead>
        <tbody>
          {data.results.map((item: any, index: any) => (
            <tr key={index}>
              {Object.keys(item).map((key) => {
                const column = columns.find((coluna: any) => coluna.name === key);
                if (column) {
                  return <td key={key}>{item[key]}</td>;
                } 
                return null;
              })}
              <td onClick={() => alert(item.id)}>Editar </td>
            </tr>
          ))}
        </tbody>
      </WrapTable>
      <div>
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
