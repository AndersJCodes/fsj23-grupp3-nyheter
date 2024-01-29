import { getNews } from './main';

const TopNewsElement = document.getElementById('topNews');
const breakingNewsElement = document.getElementById('breakingNews');

const searchDefault = "javascript&css";
const topNews = "popularity";
const breakingNews = 'publishedAt';


if (TopNewsElement) {
    TopNewsElement.addEventListener('click', function () {
        getNews(searchDefault, topNews)
    });
}

if (breakingNewsElement) {
    breakingNewsElement.addEventListener('click', function () {
        getNews(searchDefault, breakingNews)
    });
}