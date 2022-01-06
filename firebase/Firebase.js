import { URL_API } from "./Config"

export const AddReview = async (review) => {
    
    const response = await fetch(`${URL_API}reviews.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            date: Date.now(),
            review: review
        }),
    })
};