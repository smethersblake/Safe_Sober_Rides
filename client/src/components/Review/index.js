import { Rating, TextInput, Card, Label, Button } from 'flowbite-react'
import React from 'react'

function Review ()
{
    function onClickHandler ()
    {
        console.log(rating)
    }
    function RatingIcon(props) {
    const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
    } = props;
    const fill = React.useMemo(() => {
    if (hoverRating >= index) {
        return true
    } else if (!hoverRating && rating >= index) {
        return true
    }
    return false;
    }, [rating, hoverRating, index]);
    return (
        <div 
        className="cursor-pointer"
        onMouseEnter={() => onMouseEnter(index)} 
        onMouseLeave={() => onMouseLeave()} 
        onClick={() => onSaveRating(index)}>
        <Rating.Star filled={fill} />
        </div>
    )
    }
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const onMouseEnter = (index) => {
    setHoverRating(index);
    };
    const onMouseLeave = () => {
    setHoverRating(0);
    };
    const onSaveRating = (index) => {
    setRating(index);
    };
    return (
        <div className="max-w-sm">
    <Card>
    <form className="flex flex-col gap-4">
                    <div>
                        <div className='mb-2 block'>
                            <Label htmlFor='bar'
                            value='BarName'/>
                        </div>
        <div className="mb-2 block">
            <Label
            htmlFor="name"
                                value="Your Name
            "
            />
        </div>
        <TextInput
            id="name"
            type="text"
            placeholder="Your Name"
            required={true}
        />
        </div>
    <div>
        <div className="mb-2 block">
            </div>
                <Rating>
                    {[1, 2, 3, 4, 5].map((index) =>
                        {
                            return (
                                    <RatingIcon
                                        index={index}
                                        rating={rating}
                                        hoverRating={hoverRating}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        onSaveRating={onSaveRating} />
                                )
                        })}
        </Rating>
    </div>
    <Button type="submit" onClick={event=>{onClickHandler()}}>
        Submit
        </Button>
    </form>
    </Card>
</div>
    )
}
export default Review