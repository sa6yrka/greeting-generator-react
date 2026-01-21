import { OccasionButton } from './OccasionButton'
import { Cake, Snowflake } from 'lucide-react'
import { Occasion } from '../types/occasion'
import { SectionHeader } from './SectionHeader'

interface IOccasionSelectorProps {
  occasion: Occasion
  setOccasion: (value: Occasion) => void
}

export const OccasionSelector = ({ occasion, setOccasion }: IOccasionSelectorProps) => {
  return (
    <section className='space-y-4'>
      <SectionHeader step={1} title="Выберите праздник" />

      <div className='grid grid-cols-2 gap-4'>
        <OccasionButton
          icon={Cake} label={Occasion.BIRTHDAY}
          isSelected={occasion === Occasion.BIRTHDAY}
          onClick={() => setOccasion(Occasion.BIRTHDAY)}
        />
        <OccasionButton
          icon={Snowflake} label={Occasion.NEW_YEAR}
          isSelected={occasion === Occasion.NEW_YEAR}
          onClick={() => setOccasion(Occasion.NEW_YEAR)}
        />
      </div>
    </section>
  )
}
