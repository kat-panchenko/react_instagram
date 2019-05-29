export default class InstaService {
    constructor() {
this._apiBase = 'https://kat-panchenko.github.io/'
    }

    getResource = async (url) => { //в асинхронной функции нужно обязательно указывать то, что мы ждем(результат фетча)
        const result = await fetch(`${this._apiBase}${url}`);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, received ${result.status}`)
        }
        return result.json(); //обещание(промис) возвращает указанный формат, json-просто формат
    };

    getAllPosts = async () => {
        const result = await this.getResource('posts/');
        return result;
    };

    getAllPhotos = async () => {
        const result = await this.getResource('posts/');
        return result.map(this._transformPosts);
    };

    _transformPosts = (post) => {
     return {
         src: post.src,
         alt: post.alt,
         id: post.id
     }
    }
}