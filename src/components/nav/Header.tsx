import { useState } from "react"
import AvatarMenu from "./AvatarMenu.tsx"
import imgUrl from '../../assets/mastercard.png'
import { IconBell } from '@tabler/icons-react';

export default function Header() {

    const [state, setState] = useState(false)
    const navigation = [
        { title: "Dashboard", path: "#" },
        { title: "Transactions", path: "#" },
      { title: "Wallets", path: "#" },
        { title: "Settings", path: "#" },
    ]

    const submenuNav = [
        { title: "Overview", path: "#" },
        { title: "Integration", path: "#" },
        { title: "Billing", path: "#" },
        { title: "Transactions", path: "#" },
        { title: "Plans", path: "#" },
    ]

    return (
        <header className="text-base flex h-72 flex-col px-8 lg:text-sm bg-[#1c2438]">
            <div className={`items-center bg-[#1c2438] gap-x-14 px-4 max-w-screen-xl lg:mx-0 lg:flex lg:static ${state ? "h-full fixed z-10 inset-x-0" : ""}`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <a href="#">
                        <img
                            src={imgUrl}
                            width={120}
                            height={50}
                            alt="Fincan.io logo"
                        />
                    </a>
                    <div className="lg:hidden">
                        <button type="button" className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                    {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={item.path} className="block text-white">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
              }          
              <li className="flex items-center !ml-auto gap-5">
                           <form onSubmit={(e) => e.preventDefault()} className='items-center justify-start pb-4 lg:flex lg:pb-0'>
                            <div className="flex items-center gap-1 px-2 border rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search for anything here"
                                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                                />
                            </div>
                            </form>
                            
                            <div className="rounded-full cursor-pointer bg-[#1c2438] ring-offset-2 p-1 outline-none ring-offset-[#1c2438] ring-gray-200 lg:ring-2">
                            <IconBell className="w-5 h-5 text-gray-400" />                  
                            </div>
                        <AvatarMenu />
              </li>
                    </ul>
                </div>
            </div>
            <div className="lg:px-8">
                <h1 className="text-4xl text-white">Welcome back, Ali Husni !</h1>
            </div>
            <nav className="border-b w-full self-start mt-4">
                <ul className="flex items-center gap-x-3 max-w-screen-xl overflow-x-auto lg:px-8">
                    {
                        submenuNav.map((item, idx) => {
                            return (
                                // Replace [idx == 0] with [window.location.pathname == item.path]
                                <li key={idx} className={`py-1 ${idx == 0 ? "border-b-2 border-indigo-600" : ""}`}>
                                    <a href={item.path} className="block py-2 px-3 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}