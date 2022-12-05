const {getAllReview, getReviewByBarName} = require("../../controllers/Review-controller")
const router = require("express").Router()

router
    .route('/')
    .get(getAllReview)

router
    .route("bar/:bar")
    .get(getReviewByBarName)

module.exports = router