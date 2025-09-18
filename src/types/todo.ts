export interface Todo {
  id: string
  title: string
  completed: boolean
  date: string
}

export type Filter = 'all' | 'active' | 'completed'

export interface Filters {
  value: Filter
  label: string
}


