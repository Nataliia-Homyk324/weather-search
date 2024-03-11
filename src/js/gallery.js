import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGallery';
import { refs } from './refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = { 
    totalItems: 0,
    itemsPerPage: 12,
    visiblePages: 5,
    page: 1,
    // template: {
    //      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    //      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //      moveButton:
    //          '<a href="#" class="tui-page-btn tui-{{type}}">' +
    //              '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //          '</a>',
    //      disabledMoveButton:
    //          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    //              '<span class="tui-ico-{{type}}">{{type}}</span>' +
    //          '</span>',
    //      moreButton:
    //          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    //              '<span class="tui-ico-ellip">...</span>' +
    //          '</a>'
    //  }
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

pagination.on('afterMove', popular);

function popular(event) {
     const currentPage = event.page;
    service.fetchPopularPhotos(currentPage)
        .then(({ results }) => {
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
            }
        );
}

refs.searchForm.addEventListener("submit", searchFormFoto);

function searchFormFoto(event) {
    event.preventDefault();
    
    const searchQuery = event.target.elements.query.value.trim();
    if (!searchQuery) {
        iziToast.warning({
        title: 'Caution',
        message: 'Please enter query word',
        });
        return;
    }
    pagination.off('afterMove', popular);
    pagination.off('afterMove', byQuery);
    service.query = searchQuery;
    service.fetchFotosByQuery(page)
        .then(({ total, results }) => {
            if (results.length === 0) {
                iziToast.warning({
                title: 'Caution',
                message: 'Please try another word',
                });
                return
            }
            if (total <= 12) {
                refs.paginationContainer.style.display = 'none';
            } else {
                refs.paginationContainer.style.display = 'block'
            }
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
        iziToast.success({
        title: 'OK',
        message: `We found ${total} images`,
        });    
        pagination.reset(total);
    }   
    ).catch( (error) => {
        iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        });
    }
    )
    pagination.on('afterMove', byQuery);
    searchForm.reset()
};

function byQuery(event) {
     const currentPage = event.page;
    service.fetchFotosByQuery(currentPage)
        .then(({ results }) => {
        const markup = createGalleryCard(results)
        refs.gallery.innerHTML = markup;
            }
        );
}