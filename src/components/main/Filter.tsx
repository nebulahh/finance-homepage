import { useState } from "react"

export default function Example() {
  const [visibility, setVisibility] = useState('hidden') 

  function toggleVisibility() {
    if (visibility === 'hidden') {
      setVisibility('')
    } else {
      setVisibility('hidden')
    }
  }
  return (
    <>
      <div onClick={toggleVisibility} className="inline-flex items-center bg-white border rounded-md">
               <button
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
        
            <div className="relative">
        <span className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
                Filter
            </span>
 

          <div className={`absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${visibility}`}>
                    <div className="p-2">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Name
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                           Type
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Status
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
