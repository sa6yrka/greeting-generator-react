import { GoogleGenAI } from '@google/genai'
import { API_KEY } from './env'

export const gemini = new GoogleGenAI({ apiKey: API_KEY })
