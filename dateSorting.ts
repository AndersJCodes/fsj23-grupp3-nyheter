// import { displayArticles, getNews } from './main';
// declare module './main' {
//     export function getNews(searchWord: string, date: string): Promise<any[]>;
// }

// const TopNewsElement = document.getElementById('topNews');
// const breakingNewsElement = document.getElementById('breakingNews');

// const searchDefault = "javascript&css";
// const topNews = "relevancy";
// const breakingNews = 'publishedAt';


// if (TopNewsElement) {
//     TopNewsElement.addEventListener('click', function () {
//         getNews(searchDefault)
//     });
// }


// if (breakingNewsElement) {
//     breakingNewsElement.addEventListener('click', async function () {
//         const newsData = await getNews();
//         const sortedNews = [...newsData];
//         sortedNews.sort((a, b) => {
//             return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
//         });
//         displayArticles(sortedNews)
//     });
// };

// if (breakingNewsElement) {
//     breakingNewsElement.addEventListener('click', function () {
//         getNews(searchDefault, breakingNews);
//     })
// };