import React, { useState } from "react"
import {
  Container,
  Typography,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material"
import { createQuoteService } from "services/quotes"
import { IQuoteRequest } from "types/QuoteTypes"
import { toast } from "react-toastify"
import { useAtom } from "jotai"
import { airportsAtom, isReloadingAtom, transportationsAtom } from "atomStore"
import Button from "components/button"

const QuoteForm = () => {
  const [airports] = useAtom(airportsAtom)
  const [transportations] = useAtom(transportationsAtom)
  const [, setIsReloading] = useAtom(isReloadingAtom)
  const [formData, setFormData] = useState<IQuoteRequest>({
    originAirportId: 0,
    destinationAirportId: 0,
    departureDate: new Date(),
    returnDate: new Date(),
    transportationTypeId: 0,
    travellers: 0,
    name: "",
  })

  const handleChange = (
    event:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | SelectChangeEvent<number>
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const clearForm = () => {
    setFormData({
      originAirportId: 0,
      destinationAirportId: 0,
      departureDate: new Date(),
      returnDate: new Date(),
      transportationTypeId: 0,
      travellers: 0,
      name: "",
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await createQuoteService(formData)
      if (response.success) {
        clearForm()
        toast.success("Quote created with success")
        setIsReloading(true)
      } else {
        toast.error("Error while creating quote. Try again")
      }
    } catch (error) {
      toast.error("Error while creating quote. Try again")
    }
  }

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Create a new quote
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>FROM</InputLabel>
            <Select
              label="FROM"
              name="originAirportId"
              value={formData.originAirportId}
              onChange={handleChange}
            >
              {airports?.map((airport) => (
                <MenuItem value={airport.id}>
                  {airport.code} - {airport.name} - {airport.city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>DESTINATION</InputLabel>
            <Select
              name="destinationAirportId"
              label="DESTINATION"
              value={formData.destinationAirportId}
              onChange={handleChange}
            >
              {airports?.map((airport) => (
                <MenuItem value={airport.id}>
                  {airport.code} - {airport.name} - {airport.city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="departureDate"
            label="DEPART DATE"
            type="datetime-local"
            value={formData.departureDate}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="returnDate"
            label="RETURN DATE"
            type="datetime-local"
            value={formData.returnDate}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="travellers"
            label="PEOPLE"
            type="number"
            value={formData.travellers}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>TRANSPORTATION</InputLabel>
            <Select
              label="TRANSPORTATION"
              name="transportationTypeId"
              value={formData.transportationTypeId}
              onChange={handleChange}
            >
              {transportations?.map((trans) => (
                <MenuItem value={trans.id}>
                  {trans.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="NAME"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container paddingTop={3} justifyContent="space-around">
        <Button onClick={handleSubmit}>Create</Button>
        <Button onClick={clearForm}>Cancel</Button>
      </Grid>
    </Container>
  )
}

export default QuoteForm
