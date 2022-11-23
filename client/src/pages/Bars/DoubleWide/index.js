import Review from "../../../components/Review"

function DoubleWide ()
{
        const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div>
            <h1>Double Wide</h1>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://www.the-doublewide.com/" rel="noreferrer" target="_blank" >website</a>
        </div>
    )
}
export default DoubleWide