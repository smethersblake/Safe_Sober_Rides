import img from '../../components/assets/imgs/Safe Sober Rides Logo.png'
function Home ()
{
    return (
        <div className='container mx-auto my-5'>
            <div className='flex justify-end'>
                <div>
                    <img  src={img} width='100' alt='Logo'></img>
                </div>
            </div>
        </div>
    )
}
export default Home