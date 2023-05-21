import { IconArrowNarrowDown } from '@tabler/icons-react';
import imgUrl from '../../assets/mastercard.png'

function TotalBalance() {
  return (
    <div className="md:self-start bg-white flex border border-solid border-[wheat] justify-between flex-col w-80 rounded-lg p-8 box">
      <div className="flex justify-between text-gray-400 items-center">
        <p>Your Balance</p>
        <p className='flex items-center'>
          <span className='w-8'>
            <img src={imgUrl} className='w-full' alt="..." />
          </span>
          ****3241
          <span>
            <IconArrowNarrowDown />
          </span>
        </p>
      </div>

      <h1 className='text-2xl font-bold mt-2 mb-8'>$32,421.00</h1>
      <div>
              <div className='flex justify-between'>
              <button type='button'
    className="px-5 py-3 text-white w-[7.5rem] duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg">
    Transfer
      </button>
      <button type='button'
    className="px-5 py-3 text-white w-[7.5rem] duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
>
    Request
</button>
      </div>
      </div>
    </div>
  )
}

export default TotalBalance