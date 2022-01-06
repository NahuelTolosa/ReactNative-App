import { URL_API } from "../../firebase/Config";
import { getDatabase, ref, child, get } from "firebase/database";
export const GET_REVIEWS = 'GET_REVIEWS';

export const getReviews = async (dispatch) => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `reviews`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());

            

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

