import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
// import type { AppProps } from 'next/app'
import LanguageContext from '@/context/LanguageContext'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function App({ Component, pageProps }: any) {
  const [language , setLanguage] = useLocalStorage("idioma", 'spanish')
  const languageData = {
    idioma : language
  }
  return (
    <LanguageContext.Provider value={languageData} >
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LanguageContext.Provider>
  )
}
