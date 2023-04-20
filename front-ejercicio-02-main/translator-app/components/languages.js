const Languages = ({ language, onLanguageChange}) => {
    return (
        <div>
          {/* <h3 className="font-sans text-xl font-semibold mt-5 mb-3">Select desired language</h3> */}
          {LANGUAGES.map(({label, value}) => {
            return (
                <button 
                    key={value} 
                    className={
                      `${language === value ? 'bg-indigo-200 hover:bg-indigo-500 text-indigo-950' : 'bg-white text-gray-400 hover:bg-indigo-100 border-none'} rounded px-5 py-2 text-xs font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`
                    }
                    onClick={() => onLanguageChange(value)}
                >
                    {label}
                
                </button>
            )
          })}
        </div>
    );
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

export default Languages;