import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const Fields = ({ value, onChange }) => {
  
  const [inputText, setInputText] = useState(value)

  return (
      <div className="flex flex-row justify-between items-start p-2 ml-4 mt-5  w-2/4 border-t border-slate-200 ">
        {/* <h3 className="font-sans text-xl font-semibold mb-3">Enter English Text</h3> */}
        <textarea
          className="resize-none text-xs"
          type="text"
          name="text"
          id="email"
          placeholder="Enter your text here"
          onChange={(e) => onChange(e.target.value)}
          value={inputText}
          defaultValue={inputText}
        >
        </textarea>
          <button onClick={() => {
            onChange('') 
            setInputText('')
          }}
          >
            <XMarkIcon className="h-4 w-4 text-indigo-950"/>
          </button>
      </div>
  );
}

export default Fields