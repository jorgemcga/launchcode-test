import Airport from "../models/Airport"
import Transportation from "../models/Transportation"

export async function initializeData() {
  console.log("Searching for transportations")
  const existingTransportations = await Transportation.findAll()
  if (existingTransportations.length === 0) {
    console.log("No transportations found adding data")
    await Transportation.bulkCreate([
      { name: "Air & Rail" },
      { name: "Personally-Owned Vehicles" },
      { name: "Rental Vehicles" },
      { name: "Rental Car Contract" },
      { name: "Ground Transportation" },
    ])
  }

  console.log("Searching for airports")
  const existingAirports = await Airport.findAll()
  if (existingAirports.length === 0) {
    console.log("No airports found adding data")
    await Airport.bulkCreate([
      {
        code: "JFK",
        name: "John F. Kennedy International Airport",
        city: "New York",
        country: "USA",
      },
      {
        code: "LAX",
        name: "Los Angeles International Airport",
        city: "Los Angeles",
        country: "USA",
      },
      {
        code: "GRU",
        name: "Sao Paulo Guarulhos International Airport",
        city: "Guarulhos",
        country: "Brazil",
      },
      {
        code: "CPQ",
        name: "Campo dos Amarais Airport",
        city: "Campinas",
        country: "Brazil",
      },
    ])
  }
}
