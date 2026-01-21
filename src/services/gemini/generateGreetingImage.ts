import type { Occasion } from '../../types/occasion'
import type { Tone } from '../../types/tone'
import { gemini } from '../../config/gemini'

export const generateGreetingImage = async (
  occasion: Occasion,
  tone: Tone,
  interests: string,
): Promise<string | null> => {
  try {
    const prompt = `
      High quality digital illustration for a greeting card.
      Occasion: ${occasion}.
      Mood/Tone: ${tone}.
      ${interests ? `Themes/Interests: ${interests}` : ''}.
      Style: Colorful, artistic, high resolution, aesthetically pleasing. 
      No text in the image.
    `

    const response = await gemini.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: '4:3',
        },
      },
    })

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data
        return `data:image/png;base64,${base64EncodeString}`
      }
    }

    return null
  } catch (error) {
    console.error('Gemini image API error', error)
    return null
  }
}
