import { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainContent() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
    };
    return(
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
            <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white dark:text-gray-300',
                                'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                            >
                            {item.name}
                            </a>
                        ))}
                        </div>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                        onClick={toggleDarkMode}
                        className="relative rounded-full p-1 text-gray-500 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-hidden"
                        >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Theme</span>
                        {darkMode ? <SunIcon aria-hidden="true" className="size-6" /> : <MoonIcon aria-hidden="true" className="size-6" />}
                        </button>
                        <button
                        type="button"
                        className="relative rounded-full p-1 text-gray-500 hover:text-gray-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-hidden"
                        >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                        <div>
                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                                <a
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                >
                                {item.name}
                                </a>
                            </MenuItem>
                            ))}
                        </MenuItems>
                        </Menu>
                    </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                    </div>
                </div>
                </div>

                <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                        )}
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                    <div className="flex items-center px-5">
                    <div className="shrink-0">
                        <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                    </div>
                    <div className="ml-3">
                        <div className="text-base/5 font-medium text-white">{user.name}</div>
                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                    </div>
                    <button
                        onClick={toggleDarkMode}
                        type="button"
                        className="relative ml-auto shrink-0 rounded-full text-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-hidden"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Theme</span>
                        {darkMode ? <SunIcon aria-hidden="true" className="size-6" /> : <MoonIcon aria-hidden="true" className="size-6" />}
                    </button>
                    <button
                        type="button"
                        className="relative ml-auto shrink-0 rounded-full text-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white focus:outline-hidden"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="size-6" />
                    </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                        <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                        {item.name}
                        </DisclosureButton>
                    ))}
                    </div>
                </div>
                </DisclosurePanel>
            </Disclosure>
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Dashboard</h1>
                </div>
            </header>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <x-placeholder>
                <div className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
                    <svg className="absolute inset-0 size-full stroke-gray-900/10" fill="none">
                    <defs>
                        <pattern id="pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                        </pattern>
                    </defs>
                    <rect stroke="none" fill="url(#pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a)" width="100%" height="100%"></rect>
                    </svg>
                </div>
                </x-placeholder>
            </div>
        </main>
    );
}