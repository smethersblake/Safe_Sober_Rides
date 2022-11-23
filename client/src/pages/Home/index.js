import img from '../../components/assets/imgs/Safe Sober Rides Logo.png'
import { Card } from 'flowbite-react'
import redFord from '../../components/assets/imgs/Red Ford.jpg'
import carKeys from '../../components/assets/imgs/carkeys.jpg'
import valetParking from '../../components/assets/imgs/valet_parking.jpg'
function Home ()
{
    return (
        <div className='container mx-auto  mb-20'>
            <div className='flex justify-end'>
                <div>
                    <img  src={img} width='150' alt='Logo'></img>
                </div>
            </div>
            <div className="my-5">
                <div>
                    <h1 className="flex flex-wrap justify-center text-5xl font-bold my-5 mx-auto">Let Us Get You Home Safe</h1>
                </div>
            </div>
            <div className="flex flex-wrap justify-around mt-20">

            <div className="max-w-sm mx-5 p-3">
                <Card imgSrc={redFord}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        We Will Drive You Home
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    At sponsered bars we will drive you home for free. The service is provided by the bar.
                    </p>
                </Card>
                </div>

                <div className="max-w-sm m-5 p-3">
                <Card imgSrc={carKeys}>
                    <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
                        Need Your Car in the Morning?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    At select bars we offer the option for us to drive your car home with you.
                    </p>
                </Card>
                </div>

                <div className="max-w-sm m-5 p-3">
                <Card imgSrc={valetParking}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Comming Soon
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Comming soon we will be able to offer valet partking at your faovrite bars and resturants.
                    </p>
                </Card>
                </div>
                
            
            </div>
        </div>
    )
}
export default Home