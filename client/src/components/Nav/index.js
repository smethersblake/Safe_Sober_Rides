function Nav ()
{
    return (
        <nav class="bg-gray-500 dark:bg-gray-700">
            <div class="py-3 px-4 mx-1 max-w-screen-xl md:px-6">
                <div class="flex items-center">
                    <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        <li>
                            <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="About" class="text-gray-900 dark:text-white hover:underline">About Us</a>
                        </li>
                        <li>
                            <a href="Bars" class="text-gray-900 dark:text-white hover:underline">Sponsered Bars</a>
                        </li>
                {/* <li>
                    <a href="/Education" class="text-gray-900 dark:text-white hover:underline">Education</a>
                            </li> */}
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