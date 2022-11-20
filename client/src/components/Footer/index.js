import Links from "../Links"
function Footer ()
{
    return (
        
        <footer className="flex flex-grow-screen mt-auto p-4 bg-neutral-500 rounded-t-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-lg text-white sm:text-center dark:text-gray-400"><a href="/" className="hover:underline">Safe Sober Ride LLC</a>
            </span>
            <div className="text-lg text-white sm:text-center dark:text-gray-400">
                <Links></Links>
            </div>
        </footer>
    )
}
export default Footer