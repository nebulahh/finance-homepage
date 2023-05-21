import { useState } from 'react'
import { IconArrowNarrowUp, IconArrowNarrowDown, IconPigMoney, IconCreditCard } from '@tabler/icons-react';

function IncomeExpense() {
  const [visibility1, setVisibility1] = useState('hidden') 
  const [visibility2, setVisibility2] = useState('hidden') 

    function toggleVisibility1() {
    if (visibility1 === 'hidden') {
      setVisibility1('')
    } else {
      setVisibility1('hidden')
    }
    }
      function toggleVisibility2() {
    if (visibility2 === 'hidden') {
      setVisibility2('')
    } else {
      setVisibility2('hidden')
    }
    }
  
  return (
    <div className="box lg:grid rounded-3xl mb-4 bg-white border border-solid border-[wheat] flex flex-col w-[22rem] lg:w-full lg:grid-cols-2 lg:auto-rows-[150px]">
      <div className="lg:border-r p-6 flex flex-col justify-between lg:border-r-gray-400 border-b border-b-gray-400">
        <div className='flex justify-between gap-5'>
          <p className='text-gray-400'>Total Income</p>
      <p className='bg-shade ring-offset-2 flex items-center outline-none ring-offset-gray-200 ring-gray-200 lg:ring-2'>
          <IconPigMoney height="15" />
          </p>
        </div>
         <b className='text-2xl'>$10,456.00</b>
        <p className='flex items-center gap-1'>
      <IconArrowNarrowUp height="15" />
          +12.1% from last weeks</p>
    
      </div>

      <div className="border-b p-4 border-b-gray-400">
        <div className='flex justify-between'>  
        <p className='text-gray-400'>Spending limits
          </p>


          <div className="relative">
            <button onClick={toggleVisibility1} className="flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none" type='button'>
              <span className="text-sm text-gray-400 leading-none">
				Dropdown
			</span>
			<svg className="w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
			</svg>
		</button>
            <div className={`absolute flex flex-col mt-1 border text-gray-400 border-black shadow-lg ${visibility1}`}>
			<a className="flex items-center h-8 px-3 text-sm hover:bg-gray-200" href="#">Item 1</a>
			<a className="flex items-center h-8 px-3 text-sm hover:bg-gray-200" href="#">Item 2</a>
		</div>
          </div>
        </div>
        <b className='text-2xl'>$2,456.00</b> <small>used from $10,000.00</small>
        <div className="range mt-4"> 
          <label htmlFor="range1" className='hidden'>Range</label>
    <input type="range" name='range1' id="range1"/>
  </div>
      </div>

      <div className="lg:border-r flex-col p-6 max-[1100px]:border-b max-[1100px]:border-b-gray-400 lg:border-r-gray-400 flex justify-between">
        <div className='flex justify-between gap-5'>
          <p className='text-gray-400'>Total Expense</p>
        <p className='bg-shade ring-offset-2 flex items-center p-1 outline-none ring-offset-gray-200 ring-gray-200 lg:ring-2'>
          <IconCreditCard height="15" />
          </p>  
        </div>
         <b className='text-2xl'>$2,456.00</b>
        <p className='flex items-center gap-1'>
          <IconArrowNarrowDown height="15" />
          -2.5% from last weeks</p>
      </div>
      
      <div className='p-4'>
                <div className='flex justify-between'>  
        <p className='text-gray-400'>Expenses analytics
          </p>


          <div className="relative">
            <button onClick={toggleVisibility2} className="flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none" type='button'>
              <span className="text-sm text-gray-400 leading-none">
				Dropdown
			</span>
			<svg className="w-4 h-4 mt-px ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
			</svg>
		</button>
            <div className={`absolute flex flex-col text-gray-400 mt-1 border border-black shadow-lg ${visibility2}`}>
			<a className="flex items-center h-8 px-3 text-sm hover:bg-gray-200" href="#">Item 1</a>
			<a className="flex items-center h-8 px-3 text-sm hover:bg-gray-200" href="#">Item 2</a>
            </div>
            
          </div>
        </div>

        <div className='flex mt-8 justify-between'>
          <div>
            <p>Employee</p>
            <b>$1,000.00</b>
          </div>
          <div>
            <p>Bills</p>
            <b>$1,000.00</b>
          </div>
          <div>
            <p>Other</p>
            <b>456.00</b>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IncomeExpense