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

pagination.on('afterMove', (event) => {
     const currentPage = event.page;
    service.fetchPopularPhotos(currentPage)
        .then(({ results }) => {
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
            }
        );
});

refs.searchForm.addEventListener("submit", searchFormFoto);

function searchFormFoto(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value.trim();
    if (!searchQuery) {
        return;
    }
    service.query = searchQuery;
    service.fetchFotosByQuery(page)
        .then(({ total, results }) => {
            if (results.length === 0) {
                return
            }
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
        pagination.reset(total);
    }
        
    )
};
