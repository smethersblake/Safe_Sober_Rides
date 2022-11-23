import img from '../../components/assets/imgs/Safe Sober Rides Logo.png'
import { Rating, TextInput, Card, Label, Button } from 'flowbite-react'
function Home ()
{
    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-end'>
                <div>
                    <img  src={img} width='200' alt='Logo'></img>
                </div>
            </div>
            <div className="columns-3">
                <div>
                    <h1 className="flex justify-start text-4xl font-bold mt-5">Let Us Get You Home Saftly</h1>
                </div>
            </div>
            <div className="max-w-sm">
  <Card imgSrc='https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/52944405_2515396635202423_5378242143510855680_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BKQNa1u8IXUAX-abw0h&_nc_ht=scontent-msp1-1.xx&oh=00_AfDsPbNwoENaax3NLX9n1F3bd8z7vlHS5x5IHwoj0kVUYA&oe=63A506CD'>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      We will drive you home for free
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      At sponsered bars we will drive you home for free. The service is provided by the bar.
    </p>
  </Card>
</div>
        </div>
    )
}
export default Home