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
              ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-md'
              : 'border-gray-100 bg-white text-gray-500 hover:border-sky-200 hover:bg-sky-50/50'
          }`}
        >
          {tone}
        </button>
      ))}
    </div>
  )
}
