import PropTypes from "prop-types";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HomeIcon, UserGroupIcon, CogIcon, Bars3Icon, BellIcon, XMarkIcon, SunIcon, MoonIcon, ChevronRightIcon, HashtagIcon } from '@heroicons/react/24/outline';

const sidebarMenus = [
  {
    name: "Dashboard",
    code: "dashboard",
    route: "/",
    icon: HomeIcon,
    submenus: [],
  
  },
  {
    name: "Management",
    code: "management",
    route: "/management",
    icon: UserGroupIcon,
    submenus: [
      {
        name: "Users",
        code: "users",
        route: "/management/users",
      },
      {
        name: "Products",
        code: "products",
        route: "/management/products",
      },
      {
        name: "Orders",
        code: "orders",
        route: "/management/orders",
      },
    ],
  },
  {
    name: "Settings",
    code: "settings",
    route: "/settings",
    icon: CogIcon,
    submenus: [
      {
        name: "Profile",
        code: "profile",
        route: "/settings/profile",
      },
      {
        name: "Account",
        code: "account",
        route: "/settings/account",
      },
      {
        name: "Preferences",
        code: "preferences",
        route: "/settings/preferences",
      },
    ],
  },
];

export default function Sidebar({ activeMenu, activeSubmenu }) {
  return(
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-900 shadow-md border-r border-gray-300 dark:border-gray-700">
      <div className="flex h-16 items-center justify-evenly border-b border-gray-300 dark:border-gray-700">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="size-8"
        />
        <span className="text-3xl tracking-tight text-gray-800 dark:text-gray-100">Admin Panel</span>
      </div>
      <nav className="mt-4 px-3">
        {sidebarMenus.map((menu, idx) => {
          const isActiveMenu = menu.code === activeMenu;
          const hasActiveSubmenu =
            menu.submenus.length > 0 &&
            menu.submenus.some((submenu) => submenu.code === activeSubmenu);

          return (
            <Disclosure
              key={idx}
              defaultOpen={isActiveMenu || hasActiveSubmenu}
            >
              {({ open }) => (
                <div>
                  <DisclosureButton className={`${
                    isActiveMenu
                      ? "text-gray-800 dark:text-white bg-gray-300 dark:bg-gray-700"
                      : "text-gray-800 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:text-gray-300 dark:hover:text-white"
                  } my-1 rounded-md text-sm font-medium w-full text-left font-medium flex justify-between items-center focus:outline-none px-4 py-2 hover:ps-5 transition-[padding]`}>
                    <Link href={menu.route} className="flex items-center">
                      <menu.icon
                        className="w-5 h-5 flex-none"
                        aria-hidden="true"
                      />
                      <span className="ms-2 grow">{menu.name}</span>
                    </Link>
                    <span
                      className={`${
                        open ? "rotate-90" : "rotate-0"
                      } ${
                        menu.submenus.length ? "" : "invisible"
                      } flex-none transform transition-transform`}
                    >
                      <ChevronRightIcon aria-hidden="true" className="size-4" />
                    </span>
                  </DisclosureButton>
                  {menu.submenus.length > 0 && (
                    <Transition
                      enter="transition transition-[transform,max-height,opacity] duration-300 ease-out"
                      enterFrom="transform scale-95 opacity-0 max-h-0"
                      enterTo="transform scale-100 opacity-100 max-h-40"
                      leave="transition transition-[transform,max-height,opacity] duration-250 ease-out"
                      leaveFrom="transform scale-100 opacity-100 max-h-40"
                      leaveTo="transform scale-95 opacity-0 max-h-0"
                    >
                      <DisclosurePanel className="ps-6">
                        {menu.submenus.map((submenu, idx) => {
                          const isActiveSubmenu = submenu.code === activeSubmenu;
                          return (
                            <Link
                              key={idx}
                              href={submenu.route}
                              className={`flex items-center text-sm ${
                                isActiveSubmenu
                                  ? "text-gray-800 dark:text-white bg-gray-300 border-gray-800 dark:bg-gray-700 dark:border-white"
                                  : "text-gray-800 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white dark:border-gray-700 dark:hover:border-white"
                              } border-s hover:border-gray-800 rounded-r-md text-sm font-medium w-full text-left font-medium focus:outline-none px-4 py-2 hover:ps-5 transition-[padding]`}
                            >
                              {/* <HashtagIcon
                                aria-hidden="true"
                                className="size-3 flex-none"
                              /> */}
                              <span className="ms-1">{submenu.name}</span>
                            </Link>
                          );
                        })}
                      </DisclosurePanel>
                    </Transition>
                  )}
                </div>
              )}
            </Disclosure>
          );
        })}
      </nav>
    </aside>
  );
}

// PropTypes for the component
Sidebar.propTypes = {
  activeMenu: PropTypes.string.isRequired,
  activeSubmenu: PropTypes.string,
};

Sidebar.defaultProps = {
  activeSubmenu: null,
};