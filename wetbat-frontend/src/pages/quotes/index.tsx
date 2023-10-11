import { Container, Grid, Typography } from "@mui/material"
import QuoteList from "./list"
import { useEffect } from "react"
import QuoteForm from "./form"
import { getAirportsService } from "services/airports"
import { getTransportationsService } from "services/transportations"
import { useAtom } from "jotai"
import { airportsAtom, transportationsAtom } from "atomStore"

const QuotesPage = () => {
  const [, setAirports] = useAtom(airportsAtom)
  const [, setTransportations] = useAtom(transportationsAtom)

  const setStore = async () => {
    const response = await Promise.all([
      getAirportsService(),
      getTransportationsService(),
    ])

    const { "0": responseAirports, "1": responseTransportations } = response

    if (responseAirports.success && responseAirports.data) {
      setAirports(responseAirports.data)
    }
    if (responseTransportations.success && responseTransportations.data) {
      setTransportations(responseTransportations.data)
    }
  }

  useEffect(() => {
    setStore()
  }, [])

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography variant="h4" component="h1" gutterBottom>
            Quotes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <QuoteForm />
        </Grid>
        <Grid item xs={12}>
          <QuoteList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default QuotesPage
