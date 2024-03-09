import axios from "axios";

export class UnsplashAPI{
    #BASE_URL = 'https://api.unsplash.com/search/photos';
    #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
    #query = '';

    async fetchPopularPhotos(page){
        const url = `${this.#BASE_URL}?query=popular&page=${page}&per_page=12&orientation=portrait&client_id=${this.#API_KEY}`;
        try{
            const {data} =  await axios.get(url);
            return data;
        }
        catch(e){
            console.log("Bad request!!!!");
        }
    }

    async fetchFotosByQuery(page) {
        const url = `${this.#BASE_URL}?query=${this.#query}&page=${page}&per_page=12&orientation=portrait&client_id=${this.#API_KEY}`;
        try{
            const {data} =  await axios.get(url);
            return data;
        }
        catch(e){
            console.log("Bad request!!!!");
        }
    }

    set query(newQuery) {
        this.#query = newQuery;
    }


}