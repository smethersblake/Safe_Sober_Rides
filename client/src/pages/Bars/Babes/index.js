import Review from "../../../components/Review"

function Babes ()
{
    
    const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div className="container mx-auto">
            <div className="columns-2">
                <h1 className="text-3xl font-bold flex justify-end">Babes Music Bar</h1>
                <p className="flex justify-end text-sm">20685 Holyoke Avenue S. Lakeville, MN 55044</p>
            </div>
            <div>
                
            </div>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://www.babesmusicbar.com/" rel="noreferrer" target="_blank" >website</a>
            <ul>
                
            </ul>
        </div>
    )
}

export default Babes