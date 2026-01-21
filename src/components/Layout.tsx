import { Editor } from './Editor'
import { Result } from './Result'

export const Layout = () => {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
      <Editor />
      <Result />
    </main>
  )
}
