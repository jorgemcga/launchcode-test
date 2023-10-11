import { Container, Grid, Paper, Typography } from "@mui/material"
import QuoteList from "./list"
import Button from "components/button"

const QuotesPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" justifyContent="space-between">
          <Typography variant="h4" component="h1" gutterBottom>
            Quotes
          </Typography>
          <Button>
            Create a quote
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <QuoteList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default QuotesPage
