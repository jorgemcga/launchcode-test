import express from "express"
import * as QuoteController from "../controllers/quoteController"

const router = express.Router()

router.post("/", QuoteController.createQuote)
router.get("/", QuoteController.getAllQuotes)
router.get("/:id", QuoteController.getQuoteById)
router.put("/:id", QuoteController.updateQuote)
router.delete("/:id", QuoteController.deleteQuote)

export default router
