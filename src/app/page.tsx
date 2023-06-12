"use client"

import TableComponent from "@/components/Table";
import { useEffect, useState } from "react";

export default function Home() {
  const columns = [
    { id: 1, name: "id" },
    { id: 2, name: "name" },
    { id: 3, name: "status" },
    { id: 4, name: "editar" }
  ]

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  const [filterText, setFilterText] = useState('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [filterColumnName, setFilterColumnName] = useState<string>('');
  const [filterColumnSort, setFilterColumnSort] = useState<boolean>(true);

  async function getData() {
    setLoading(true)
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    const data = await resp.json();
    setData(data);
    console.log(data)
    setLoading(false)
  }

  function updatePage(pageNumber: number) {
    setPageNumber(pageNumber)
  }

  useEffect(() => {
    getData()
  }, [pageNumber])

  return (
    <main>
      {loading ? (<>Carregando...</>) : (<>
        <TableComponent 
          items={data.results} 
          total={data.info.count} 
          updatePage={updatePage} 
          columns={columns} 
        />
      </>)}
    </main>
  )
}
