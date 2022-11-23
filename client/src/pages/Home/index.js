import img from '../../components/assets/imgs/Safe Sober Rides Logo.png'
import { Rating, TextInput, Card, Label, Button } from 'flowbite-react'
function Home ()
{
    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-end'>
                <div>
                    <img  src={img} width='150' alt='Logo'></img>
                </div>
            </div>
            <div className=" my-5">
                <div>
                    <h1 className="flex justify-start text-4xl font-bold mb-5">Let Us Get You Home Saftly</h1>
                </div>
            </div>
            <div className="flex justify-between">

            <div className="max-w-sm ">
                <Card imgSrc='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/52944405_2515396635202423_5378242143510855680_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BKQNa1u8IXUAX-abw0h&_nc_ht=scontent-msp1-1.xx&oh=00_AfDsPbNwoENaax3NLX9n1F3bd8z7vlHS5x5IHwoj0kVUYA&oe=63A506CD'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        We Will Drive You Home
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    At sponsered bars we will drive you home for free. The service is provided by the bar.
                    </p>
                </Card>
                </div>

                <div className="max-w-sm ">
                <Card imgSrc='http://www.allaboutparking.com/wp-content/uploads/2018/08/carkeys.jpg'>
                    <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
                        Need Your Car in the Morning?
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    At select bars we offer the option for us to drive your car home with you.
                    </p>
                </Card>
                </div>

                <div className="max-w-sm ">
                <Card imgSrc='https://t4.ftcdn.net/jpg/02/39/12/61/360_F_239126131_hm0qqQ4cA2tvv6CKjCTONUz2Wc5xpeZN.jpg'>
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