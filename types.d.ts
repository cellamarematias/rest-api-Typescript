export type Weather = String
export type Visibility = Number

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// hidde types and resuse it

// export type NonSensitiveInfo = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type NonSensitiveInfo = Omit<DiaryEntry, 'comment' >
