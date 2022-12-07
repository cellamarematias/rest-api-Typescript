import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  // const diary = diaryServices.getDiaryById(+req.params.id)
  const diary = diaryServices.getDiaryById(Number(req.params.id))

  res.send(diary)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryServices.addEntry(
    {
      date,
      weather,
      visibility,
      comment
    }
  )
  res.json(newDiaryEntry)
})

export default router
