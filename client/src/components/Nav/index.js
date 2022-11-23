import { Dropdown } from 'flowbite-react';
import BarList from '../../components/assets/bar-list'

function Nav ()
{
    function shortenName (name)
    {

        return name.name.replaceAll(" ", '-')
    }
    return (
        <nav class="bg-gray-500 dark:bg-gray-700">
            <div class="py-3 px-4 mx-1 max-w-screen-xl md:px-6">
                <div class="flex items-center justify-center">
                    <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="About" class="text-gray-900 dark:text-white hover:underline">About Us</a>
                        </li>
                        <li>
                            <Dropdown label="Sponsered Bars" inline={true} dismissOnClick={true} className="rounded-lg">
                                {BarList.map((bar) =>
                    <Dropdown.Item className='hover:bg-blue-400 rounded-lg'><a href={shortenName(bar)} class="text-gray-900 dark:text-white hover:underline">{bar.name}</a></Dropdown.Item>)}
                            </Dropdown>
                        </li>
                        <li>
                            <a href="Events" class="text-gray-900 dark:text-white hover:underline">Events</a>
                        </li>
                            <li>
                                <a href="Contact" class="text-gray-900 dark:text-white hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav