import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react'
import { getQuotesService } from "../../services/quotes"
import { IQuoteResponse } from "../../types/QuoteTypes"

const QuoteList = () => {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [quotesList, setQuotesList] = useState<IQuoteResponse[]>([] as IQuoteResponse[])
  const fetchData = async () => {
    setState("loading")
    const response = await getQuotesService()
    if (response.success) {
      setQuotesList(response.data ?? [])
      setState("success")
    } else {
      setState("error")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'destinationAirport.code', headerName: 'Destination' },
    { field: 'price', headerName: 'Price' },
  ];
  
  const rows: GridRowsProp = quotesList.map(q => ({
    id: q.id.toString(),
    name: q.name,
    Destination: q.destinationAirport.code,
    Price: '100'
  }))

  return (
    <div>
      <h1>Quotes List</h1>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default QuoteList
