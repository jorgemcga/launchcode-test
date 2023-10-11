import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import QuoteList from "./list"

const QuotesPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            Lista de Cotações
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Adicionar Cotação
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
