import { IconCar, IconConfetti, IconDeviceGamepad2 } from '@tabler/icons-react';

const savings = [
  {
    plan: 'Get new Car',
    monthly_savings: '500',
    target: '25,000.00',
    curr_saving: '5,000.00',
    icon: <IconCar />,
  },
    {
    plan: 'Marraiage plan',
    monthly_savings: '100.00',
    target: '25,000.00',
      curr_saving: '351.00',
    icon: <IconConfetti />,
  },
  {
    plan: 'Buy  PS5',
    monthly_savings: '100',
    target: '1,000.00',
    curr_saving: '300.00',
    icon: <IconDeviceGamepad2 />,
  }
]

function SavingsPlan() {
  return (
    <div className="bg-white flex border border-solid border-[wheat] flex-col w-80 rounded-lg p-8 box">
      <h1 className='text-1xl font-bold'>Savings plans</h1>
      {
        savings.map((plan, i) => (
          <div key={i} className='mb-4 p-4 border border-solid border-gray-200'>
            <div className="flex mb-4 items-center justify-between">
              <p className='bg-shade ring-offset-2 p-1 outline-none ring-offset-gray-200 ring-gray-200 lg:ring-2'>
                {plan.icon}

              </p>
              <div>
                <p>{plan.plan}</p>
                <small className='text-gray-400'>{'Monthly savings: ' + plan.monthly_savings }</small>
              </div>
              <p className='self-start'>...</p>
            </div>
            <div className="flex justify-between items-center">
              <p>${plan.curr_saving}</p>
              <p className='text-gray-400'>
                target:
                 ${plan.target}</p>
            </div>

  
  <div className="range mt-4">  
    <input type="range" id="range1"/>
  </div>

            
          </div>
        ))
      }
    </div>
  )
}
export default SavingsPlan