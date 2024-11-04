import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

function CustomOption({ option, setProps, index, setSelectedDates,setReset }) {

    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
                {option.selected}
            </MenuButton>
            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems
                    className="z-40 absolute right-0 w-36 mt-2 origin-top-right bg-black
                    rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                     flex flex-col gap-1 py-1"
                >
                    {option.options.map((op, i) => (
                        <MenuItem key={i}>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? 'text-black hover:bg-white' : 'text-white'
                                    } flex items-center w-full px-2 py-2 text-sm transition`}
                                    value={op}
                                    onClick={() => {
                                        setProps((prevProps) => {
                                            if (index === 3){
                                                setReset(true)
                                                setSelectedDates({startDate: null, endDate: null})
                                            }
                                            const newProps = [...prevProps];
                                            newProps[index] = {
                                                ...newProps[index],
                                                selected: op
                                            };
                                            return newProps;
                                        });
                                        console.log(`Selected: ${op}`);
                                    }}
                                >
                                    {op}
                                </button>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    )
}

export default CustomOption;
