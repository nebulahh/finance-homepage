import { useEffect, useRef, useState } from "react"
import imgUrl from '../../assets/user.jpg'

export default function AvatarMenu() {

    const [state, setState] = useState(false)
    const profileRef = useRef<HTMLButtonElement>(null)

    const navigation = [
        { title: "Dashboard", path: "#" },
        { title: "Profile", path: "#" },
        { title: "Settings", path: "#" },
    ]


    useEffect(() => {
        const handleDropDown = (e: MouseEvent | TouchEvent) => {
            if (!profileRef?.current?.contains(e.target as HTMLButtonElement)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className="relative border-t lg:border-none">
                <button type="button" ref={profileRef} className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={imgUrl}
              className="w-full h-full rounded-full"
              alt="..."
            />
                </button>
            <ul className={`lg:bg-white z-20 top-14 right-0 bg-inherit mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
                <li>
                  <button type="button" className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    Logout
                  </button>
                </li>
            </ul>
        </div>
    )
}