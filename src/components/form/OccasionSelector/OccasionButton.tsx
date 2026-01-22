import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  label: string
  isSelected: boolean
  onClick: () => void
}

export const OccasionButton = ({ icon: Icon, label, isSelected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
      relative w-full h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
      ${
        isSelected
          ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-sm'
          : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-sky-200 hover:bg-sky-50/50'
      }
      `}
    >
      <div className={`p-3 rounded-full ${isSelected ? 'bg-sky-200' : 'bg-white'}`}>
        <Icon className={`w-6 h-6 ${isSelected ? 'text-sky-700' : 'text-gray-400'}`} />
      </div>
      <span className='font-semibold text-sm sm:text-base'>{label}</span>

      {isSelected && <div className='absolute inset-0 border-2 border-sky-500 rounded-2xl pointer-events-none' />}
    </button>
  )
}
