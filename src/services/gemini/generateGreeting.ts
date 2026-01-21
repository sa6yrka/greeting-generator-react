import { Tone } from '../../types/tone'
import type { Occasion } from '../../types/occasion'
import type { Language } from '../../types/language'
import { gemini } from '../../config/gemini'


export const generateGreeting = async (
  occasion: Occasion,
  name: string,
  age: string,
  interests: string,
  tone: Tone,
  language: Language,
): Promise<string> => {
  const prompt = `
      Напиши уникальное поздравление на языке: ${language}.
      
      Повод: ${occasion},
      Для кого: ${name},
      Возраст: ${age ? age : 'Не указан'},
      Интересы/хобби: ${interests ? interests : 'Не указаны'},
      Тон: ${tone}
      
      Инструкции по стилю (адаптируй под культурный контекст языка ${language}):
      - Официальный: Сдержанный, уважительный.
      - Дружеский: Теплый, неформальный.
      - Юмористический: Веселый, забавный, с доброй шуткой.
      - Романтический: Нежный, любящий, чувственный.
      - Трогательный: Душевный, эмоциональный.
      - 18+: Дерзкое, с перчинкой, сарказмом или взрослыми шутками. (Только если уместно для контекста 18+).
      
      Общие требования:
      - Обязательно учитывай возраст и интересы человека.
      - Длина: От 2 до 5 предложений.
      - Используй 2-3 подходящих по смыслу эмодзи.
      - Форматирование: Просто текст, без markdown заголовков.
      - Язык ответа СТРОГО: ${language}.
    `

  const response = await gemini.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      temperature: tone === Tone.ADULT ? 0.9 : 0.8,
    },
  })

  if (!response.text) {
    throw new Error('Не удалось сгенерировать текст')
  }

  return response.text.trim()
}
