import Filter from "./Filter.tsx"

export default function HistoryTable() {

    const tableItems = [
        {
        name: "Solo learn app",
                 plan: "Monthly subscription",
            date: "Oct 9, 2023",
            status: "Active",
            price: "$35.000",
     
        },
        {
          name: "Window wrapper",
                     plan: "Monthly subscription",
            date: "Oct 12, 2023",
            status: "Active",
            price: "$12.000",
 
        },
        {
          name: "Unity loroin",
                    plan: "Annually subscription",
            date: "Oct 22, 2023",
            status: "Archived",
            price: "$20.000",
  
        },
        {
          name: "Background remover",
                   plan: "Monthly subscription",
            date: "Jan 5, 2023",
            status: "Active",
            price: "$5.000",
   
        },
        {
          name: "Colon tiger",
                     plan: "Annually subscription",
            date: "Jan 6, 2023",
            status: "Active",
            price: "$9.000",
 
        },
    ]


    return (
        <>
            <div className="max-w-screen-xl lg:w-full md:m-0 lg:mx-auto w-[23rem] mt-4 mx-auto p-4 rounded-3xl border border-solid border-[wheat] md:px-8 box">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 font-bold sm:text-1xl">
                        Transaction History
                    </h3>

                </div>
                <div className="mt-3 md:mt-0">
            <Filter />
                </div>
            </div>
            <div className="relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
              <tr>
                            <th className="py-3 pr-6 flex items-center">Name
                             <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                            </th>
                            <th className="py-3 pr-6">Type</th> 
                            <th className="py-3 pr-6 flex items-center">date
                                   <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                            
                            </th>
                <th className="py-3 pr-6">Amount</th>
                            <th className="py-3 flex items-center">status
                             <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-4 whitespace-nowrap">{item.name}
                                    </td>
                                            <td className="pr-6 py-4 whitespace-nowrap">{item.plan}
                                            </td>
                                <td className="pr-6 py-4 whitespace-nowrap">{item.date}</td>
                                           <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Active" ? "text-green-600 bg-green-50" : "text-blue-600 bg-blue-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>                  
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}