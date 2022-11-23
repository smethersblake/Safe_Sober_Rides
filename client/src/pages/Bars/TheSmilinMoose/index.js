import Review from "../../../components/Review"

function TheSmilinMoose ()
{
        const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div>
            <h1>The Smilin Moose</h1>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://www.smilinmoosebar.com/" rel="noreferrer" target="_blank" >website</a>
        </div>
    )
}
export default TheSmilinMoose