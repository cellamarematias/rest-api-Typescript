import { DiaryEntry, NewDiaryEntry, NonSensitiveInfo } from '../../types'
import data from './data.json'

const diaries: DiaryEntry[] = data as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfo[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const getDiaryById = (id: number): NonSensitiveInfo | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfEntry } = entry
    return restOfEntry
  }
  return entry
}

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
