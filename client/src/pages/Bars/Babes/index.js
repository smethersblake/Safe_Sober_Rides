import BarList from "../../../components/assets/bar-list"
import Review from "../../../components/Review"

function Babes ()
{
    return (
        <div>
            <h1 className="BarName">Babes</h1>
            <Review />
            <h1>{BarList.map((bar)  => {if(bar.name === "Babes"){return (bar.url)}})}</h1>
        </div>
    )
}
export default Babes