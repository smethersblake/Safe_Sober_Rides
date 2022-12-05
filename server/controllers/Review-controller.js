const Review = require("../models/Review")

const reviewController = {
    getAllReview (req, res)
    {
        Review.find({})
            .then(dbReviewData => res.json(dbReviewData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
        })
    },
    getReviewByBarName (req, res)
    {
        Review.find({bar: req.params.bar}).then(dbReviewData => res.json(dbReviewData))
            .catch(err =>
            {
            console.log(err)
            res.status(400).json(err)
        })
    }
}
module.exports = reviewController