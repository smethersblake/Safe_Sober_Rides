import Review from "../../../components/Review"

function CaptainBlacks ()
{
    const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div>
            <h1>Captain Blacks</h1>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://www.facebook.com/people/Captain-Blacks-Bar-and-Grill/100063824851762/" rel="noreferrer" target="_blank" >website</a>
        </div>
    )
}
export default CaptainBlacks