import {UnsplashAPI} from './UnsplashAPI';

const service = new UnsplashAPI();
service.fetchPopularPhotos(1).then(data => console.log(data));