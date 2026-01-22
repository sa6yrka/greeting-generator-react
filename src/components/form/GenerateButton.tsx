import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isDisabled: boolean
  onClick: () => Promise<void>
}

export const GenerateButton = ({ children, isDisabled, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        w-full group flex items-center justify-center gap-2 py-4 px-8 rounded-full text-white font-bold text-lg shadow-lg shadow-sky-500/30 transition-all duration-300 transform
        ${
        isDisabled
          ? 'bg-sky-400 cursor-not-allowed'
          : 'bg-linear-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 hover:scale-[1.02] active:scale-[0.98]'
      }
    `}
    >
      {children}
    </button>
  )
}
