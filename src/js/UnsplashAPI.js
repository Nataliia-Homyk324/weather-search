import axios from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export class UnsplashAPI{
    #BASE_URL = 'https://api.unsplash.com/search/photos';
    #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
    #query = '';
    #searchParams = new URLSearchParams({
        per_page: 12,
        orientation: 'portrait',
        client_id: this.#API_KEY,
    })
    async fetchPopularPhotos(page){
        const url = `${this.#BASE_URL}?query=popular&page=${page}&${this.#searchParams}`;
        try{
            const {data} =  await axios.get(url);
            return data;
        }
        catch (e) {
            iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Try again later',
            });
        }
    }

    async fetchFotosByQuery(page) {
        const url = `${this.#BASE_URL}?query=${this.#query}&page=${page}&${this.#searchParams}`;
        try{
            const {data} =  await axios.get(url);
            return data;
        }
        catch(e){
            iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Try again later',
            });
        }
    }

    set query(newQuery) {
        this.#query = newQuery;
    }


}