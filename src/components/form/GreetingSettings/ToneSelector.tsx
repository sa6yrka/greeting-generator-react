import { Tone } from '../../../types/tone'

interface Props {
  selectedTone: Tone
  setTone: (selectedTone: Tone) => void
}

export const ToneSelector = ({ selectedTone, setTone }: Props) => {
  const tones = Object.values(Tone)

  return (
    <div className='flex flex-wrap gap-3'>
      {tones.map((tone) => (
        <button
          key={tone}
          onClick={() => setTone(tone)}
          className={`
            px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border-2
            ${
            selectedTone === tone
              ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
              : 'border-gray-100 bg-white text-gray-500 hover:border-blue-200 hover:bg-blue-50/50'
          }`}
        >
          {tone}
        </button>
      ))}
    </div>
  )
}
