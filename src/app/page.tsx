"use client"

import TableComponent from "@/components/Table";
import { useEffect, useState } from "react";

export default function Home() {

  const columns = [
    { id: 1, name: "id", label: "Id", type: '' },
    { id: 2, name: "name", label: "Nome", type: '' },
    { id: 3, name: "status", label: "Status", type: '' },
    { id: 4, name: "species", label: "Espécies", type: '' },
    { id: 4, name: "gender", label: "Genero", type: '' },
    { id: 5, name: "editar", label: "Editar", type: 'link' }
  ]

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const [filterText, setFilterText] = useState('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [filterColumnName, setFilterColumnName] = useState<string>('');
  const [filterColumnSort, setFilterColumnSort] = useState<boolean>(true);

  async function getData() {
    setLoading(true)
    // const resp = await api.get(`/Goal/List?&StoreName=${storeName}&OrderBy=${columnTable}&IsDesc=${columnTableSorted}`)
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&ordenarPor=${setFilterColumnName}&IsDesc=${filterColumnSort}`)
    const data = await resp.json();
    setData(data);
    console.log(data);
    console.log(data)
    setLoading(false)
  }

  function updatePage(pageNumber: number) {
    setPageNumber(pageNumber)
  }

  function sortTable(columnName: string, columnOrder: boolean) {
    setFilterColumnName(columnName)
    setFilterColumnSort(columnOrder)
  }

  useEffect(() => {
    getData()
  }, [pageNumber, filterColumnName, filterColumnSort])

  return (
    <main>
      {loading ? (<>Carregando...</>) : (<>
        <TableComponent 
          data={data} 
          total={data.info.count} 
          updatePage={updatePage} 
          sortTable={sortTable}
          columns={columns} 
          isEditable={false}
        />
      </>)}
    </main>
  )
}