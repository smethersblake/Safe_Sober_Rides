import Review from "../../../components/Review"

function BullseyeSaloon ()
{
    const handleClick = event =>
    {
        // used for keeping track how many clicks to the bars website has happened
        console.log('click')
    }
    return (
        <div>
            <h1>Bullseye Saloon</h1>
            <Review />
            <a id="webLink" onClick={handleClick} href="https://bullseye-saloon.edan.io/" rel="noreferrer" target="_blank" >website</a>
        </div>
    )
}
export default BullseyeSaloon