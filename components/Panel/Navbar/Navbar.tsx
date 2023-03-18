import { useState } from 'react'
import Link from 'next/link';

const Navbar = () => {
  const [menuState,setMenuState] = useState<boolean>(false);

  const handleSidebarMenu = () => setMenuState(!menuState)
  console.log(menuState)
  
  return (
    <>
    <div className="absolute flex-col justify-between hidden w-64 bg-gray-800 shadow sm:relative md:h-full sm:flex" style={{height:"100vh"}}>
          <div className="px-8">
              <div className="flex items-center w-full h-16">
                  <div className="text-2xl font-bold text-white">Logo</div>
              </div>
              <ul className="mt-12">
                  <li className="flex items-center justify-between w-full mb-6 text-gray-300 cursor-pointer">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                              <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                              <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                              <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                          </svg>
                          <span className="ml-2 text-sm">Dashboard</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                          <span className="ml-2 text-sm">Products</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                              <circle cx="12" cy="12" r="9"></circle>
                          </svg>
                          <span className="ml-2 text-sm">Performance</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <polyline points="7 8 3 12 7 16"></polyline>
                              <polyline points="17 8 21 12 17 16"></polyline>
                              <line x1="14" y1="4" x2="10" y2="20"></line>
                          </svg>
                          <span className="ml-2 text-sm">Deliverables</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                          <span className="ml-2 text-sm">Invoices</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="12 4 4 8 12 12 20 8 12 4" />
                              <polyline points="4 12 12 16 20 12" />
                              <polyline points="4 16 12 20 20 16" />
                          </svg>
                          <span className="ml-2 text-sm">Inventory</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx="12" cy="12" r="3" />
                          </svg>
                          <span className="ml-2 text-sm">Settings</span>
                      </Link>
                  </li>
              </ul> 
          </div>
          <div className="px-8 border-t border-gray-700">
              <ul className="flex items-center justify-between w-full bg-gray-800">
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="show notifications" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open chats" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open settings" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open logs" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                              <line x1="10" y1="12" x2="14" y2="12"></line>
                          </svg>
                      </button>
                  </li>
              </ul>
          </div>
      </div>
      <div className={menuState ? "absolute z-40 flex-col justify-between transition duration-150 ease-in-out bg-gray-800 shadow md:h-full sm:hidden" : "absolute z-40 flex-col justify-between transition duration-150 w-64 ease-in-out bg-gray-800 shadow md:h-full sm:hidden"} id="mobile-nav">
          <button aria-label="toggle sidebar" id="openSideBar" className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 bg-gray-800 rounded rounded-tr rounded-br shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
              <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="6" cy="10" r="2" />
                  <line x1="6" y1="4" x2="6" y2="8" />
                  <line x1="6" y1="12" x2="6" y2="20" />
                  <circle cx="12" cy="16" r="2" />
                  <line x1="12" y1="4" x2="12" y2="14" />
                  <line x1="12" y1="18" x2="12" y2="20" />
                  <circle cx="18" cy="7" r="2" />
                  <line x1="18" y1="4" x2="18" y2="5" />
                  <line x1="18" y1="9" x2="18" y2="20" />
              </svg>
          </button>
          <button aria-label="Close sidebar" id="closeSideBar" className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 text-white bg-gray-800 rounded-tr rounded-br shadow cursor-pointer" onClick={handleSidebarMenu}>
              <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
          </button>
          <div className={menuState ? "hidden" : "px-8"} style={{height:"100vh"}}>
              <div className="flex items-center w-full h-16">
                  <div className="text-2xl font-bold text-white">Logo</div>
              </div>
              <ul className="mt-12">
                  <li className="flex items-center justify-between w-full mb-6 text-gray-300 cursor-pointer hover:text-gray-500">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                              <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                              <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                              <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                          </svg>
                          <span className="ml-2 text-sm">Dashboard</span>
                      </Link> 
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                          <span className="ml-2 text-sm">Products</span>
                      </Link> 
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                              <circle cx="12" cy="12" r="9"></circle>
                          </svg>
                          <span className="ml-2 text-sm">Performance</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <polyline points="7 8 3 12 7 16"></polyline>
                              <polyline points="17 8 21 12 17 16"></polyline>
                              <line x1="14" y1="4" x2="10" y2="20"></line>
                          </svg>
                          <span className="ml-2 text-sm">Deliverables</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                          <span className="ml-2 text-sm">Invoices</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full mb-6 text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="12 4 4 8 12 12 20 8 12 4" />
                              <polyline points="4 12 12 16 20 12" />
                              <polyline points="4 16 12 20 20 16" />
                          </svg>
                          <span className="ml-2 text-sm">Inventory</span>
                      </Link>
                  </li>
                  <li className="flex items-center justify-between w-full text-gray-400 cursor-pointer hover:text-gray-300">
                      <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx="12" cy="12" r="3" />
                          </svg>
                          <span className="ml-2 text-sm">Settings</span>
                      </Link>
                  </li>
              </ul> 
          </div>
          <div className={menuState ? "hidden" : "px-8 border-t border-gray-700"}>
              <ul className="flex items-center justify-between w-full bg-gray-800">
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="show notifications" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open chats" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open settings" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                      </button>
                  </li>
                  <li className="pt-5 pb-3 text-white cursor-pointer">
                      <button aria-label="open logs" className="rounded focus:outline-none focus:ring-2 focus:ring-gray-300">
                          <svg  xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z"></path>
                              <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                              <line x1="10" y1="12" x2="14" y2="12"></line>
                          </svg>
                      </button>
                  </li>
              </ul>
          </div>
      </div> 
    </>
  )
}

export default Navbar