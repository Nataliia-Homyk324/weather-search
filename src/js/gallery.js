import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGallery';
import { refs } from './refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const options = { 
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,
}

const pagination = new Pagination(refs.paginationContainer, options);

const page = pagination.getCurrentPage();

const service = new UnsplashAPI();
service.fetchPopularPhotos(page)
    .then(({total, results}) => {
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
        pagination.reset(total);
    });



