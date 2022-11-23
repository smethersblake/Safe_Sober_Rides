import Review from "../../../components/Review"

function Babes ()
{
    
    const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div>
            <h1 className="BarName">Babes</h1>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://www.babesmusicbar.com/" rel="noreferrer" target="_blank" >website</a>
            <ul>
                
            </ul>
        </div>
    )
}

export default Babes