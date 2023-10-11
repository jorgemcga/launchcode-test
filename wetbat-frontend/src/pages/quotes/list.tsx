import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { getQuotesService } from "../../services/quotes"
import { IQuoteResponse } from "../../types/QuoteTypes"
import { Box, CircularProgress, Grid, Typography } from "@mui/material"
import Button from "components/button"

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
    { field: "id", headerName: "ID #" },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "destinationAirport", headerName: "DESTINATION", flex: 1 },
    { field: "price", headerName: "PRICE" },
  ]

  const rows: GridRowsProp = quotesList.map((q) => ({
    id: q.id.toString(),
    name: q.name,
    destinationAirport: q.destinationAirport.code,
    price: "100"
  }))

  const GetComponentState = {
    idle: <Grid />,
    loading: (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <CircularProgress />
      </Box>
    ),
    success: (
      <DataGrid rows={rows} columns={columns} />
    ),
    error: (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Sorry there was an error on fecth data!
        </Grid>
        <Grid item xs={12}>
          <Button onClick={fetchData}>Try again</Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid item xs={12} padding={2}>
      <Typography variant="h5" component="h1">
        Quotes List
      </Typography>
      {
        GetComponentState[state]
      }
    </Grid>
  )
}

export default QuoteList
