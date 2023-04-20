import Fields from "@/components/fields"
import Languages from "@/components/languages"
import Translate from "@/components/translate"
import { useEffect, useState } from "react"


export default function Home() {
  const [text, setText] = useState('')
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    console.log('Mi idioma es, ', language);
  }, [text, language])
  
  return (
    <>
      <main className="ml-5 bg-white rounded-lg p-8 m-20">
        <div className="flex justify-between items-center">
          <h1 className="font-sans text-xl font-semibold mx-4 my-3 text-indigo-950">Translate app</h1>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 mr-4">
            <span className="text-xs font-medium leading-none text-white">AC</span>
          </span>
        </div>
        <hr className="mx-4 my-3"/>
        <Languages language={language} onLanguageChange={setLanguage}/>
        <div className="flex">
          <Fields onChange={setText}/>
          <Translate language={language} text={text}/>
        </div>
      </main>
    </>
  )
}
