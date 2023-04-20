import axios from "axios";
import { useEffect, useState } from "react";
import { StarIcon } from '@heroicons/react/24/outline'

const Translate = ({ language, text }) => {
  
  const [translated] = useTranslation(text, language)
  // console.log(translated)
  // const translating = translated.data.translations[0].translatedText;
    return (
        <>
          {/* <h3 className="font-sans text-xl font-semibold mb-3">Output</h3> */}
          <div className='bg-slate-100 h-32 mt-5 w-2/4  ml-4 flex flex-row justify-between items-start'>
            <p className="m-2 text-xs">{translated}</p>
            <StarIcon className="h-4 w-4 m-2 text-indigo-950"/>
          </div>
        </>
    );
}

const useTranslation = (text, language) => {
  const [translated, setTranslate] = useState('')
  
  useEffect(() => {
    // if (!text) {
    //   return
    // }
    const cancelToken = axios.CancelToken.source()
    doTranslation(text, language, cancelToken, setTranslate)
  }, [text, language])
  
  return [translated]
}

//Utility FN - Mover a carpeta utils/utils.js
const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const doTranslation = debounce(
  async(input, languageCode, cancelToken, callback) => {
    try {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI",
        {
          q: input,
          target: languageCode
        },
        {
          cancelToken: cancelToken.token
        }
      )
      console.log('DATOS:', data.data)
      callback(data.data.translations[0].translatedText)
    } catch (err) {
      console.log('ERROR', err)
    }
  }
)

export default Translate;