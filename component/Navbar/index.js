import React from 'react'
import { Disclosure } from '@headlessui/react'

const navigation = [
    { icon: 'home', name: 'Home', href: '#', current: false },
    { icon: 'book', name: 'My Course', href: '#', current: false },
    { icon: 'assessment', name: 'Dashboard', href: '#', current: true },
    { icon: 'insert_comment', name: 'Chat', href: '#', current: false },
    { icon: 'notifications', name: 'Notification', href: '#', current: false },
    { icon: 'account_circle', name: 'Profile', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8 shadow">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-1 flex lg:justify-between sm:items-stretch sm:justify-start">
                                <div className="mr-2">
                                    {/* logo mobile */}
                                    <img
                                        className="block lg:hidden"
                                        src="/image/logo.png"
                                        alt="Logo"
                                    />
                                    {/* logo dekstop */}
                                    <img
                                        className="hidden lg:block "
                                        src="/image/logo.png"
                                        alt="Logo"
                                    />
                                </div>
                                <div className="relative flex">
                                    <div className="absolute text-blue-custom mt-4 ml-3">
                                        <span className="material-icons">search</span>
                                    </div>
                                    <input type="search" className="bg-white-custom rounded-3xl lg:pl-12 lg:w-96 pl-10 pt-3 pb-3 outline-none" placeholder="Search..." />
                                </div>

                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <>
                                                <div key={item.name} className="flex mt-2">
                                                    <span className={classNames(
                                                        item.current ? "text-blue-custom " : "text-black-custom hover:text-blue-custom",
                                                        "material-icons mt-2"
                                                    )}>{item.icon}</span>
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? "text-blue-custom font-bold" : "text-black-custom hover:text-blue-custom font-bold",
                                                            "px-3 py-2  "
                                                        )}
                                                        aria-current={item.current ? "page" : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile toogle button*/}
                            <div className="sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <span className="material-icons">
                                            close
                                        </span>
                                    ) : (
                                        <span className="material-icons">
                                            more_vert
                                        </span>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>


                    {/* menu versi mobile  */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="bg-white-custom px-2 pt-2 pb-3 space-y-1 shadow rounded-md">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? "bg-yellow-custom text-white font-bold " : "text-black-custom hover:bg-yellow-custom hover:text-white font-bold",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
