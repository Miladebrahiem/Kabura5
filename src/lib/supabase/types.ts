export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dish_categories: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
        }
      }
      dishes: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          type: 'vegan' | 'vegetarian' | 'meat'
          category_id: string
          history: string | null
          image_url: string | null
          min_people: number
          created_at: string
          updated_at: string
          active: boolean
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          type: 'vegan' | 'vegetarian' | 'meat'
          category_id: string
          history?: string | null
          image_url?: string | null
          min_people?: number
          created_at?: string
          updated_at?: string
          active?: boolean
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          type?: 'vegan' | 'vegetarian' | 'meat'
          category_id?: string
          history?: string | null
          image_url?: string | null
          min_people?: number
          created_at?: string
          updated_at?: string
          active?: boolean
        }
      }
    }
  }
}