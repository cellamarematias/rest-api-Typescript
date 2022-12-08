// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = Number

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  ok = 'ok',
  bad = 'bad'
}

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

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
