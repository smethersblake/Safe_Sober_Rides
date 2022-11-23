import BarList from "../../components/assets/bar-list"
import Review from "../../components/Review"

function Bars ()
{
    function shortenName (name)
    {

        return name.name.replaceAll(" ", '-')
    }
    return (
        <div>

            <h1>Bars</h1>
            <ul>
                {BarList.map((bar) =>
                    
                    <li><a href={shortenName(bar)} class="text-gray-900 dark:text-white hover:underline">{bar.name}</a></li>)}
            </ul>
            
        </div>
    )
}
export default Bars