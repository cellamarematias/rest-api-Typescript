import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils/utils'

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
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
