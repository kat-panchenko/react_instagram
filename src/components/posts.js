import React, {Component} from 'react';
import User from './user';
import InstaService from '../services/instaservice';
import errorMessage from './errorMessage';

export default class Posts extends Component {
    InstaService = new InstaService(); //создали сервер,заимпортировати внутрь класса чтобы обращаться к базе данных
    state = {
        posts: [],
        error: false
    }; //создали состояние компонента для отслеживания какие есть посты и ошибки

    componentDidMount() { // после того как компонент построился, запускается функция обновления постов
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts() //запускает сервис,с помощью метода гетОлПостс получает все посты
            .then(this.onPostsLoaded) //обробатывает промис который она возвращает , и если все ок- запуск функции онПостсЛоадид
            .catch(this.onError); //если сервис не отвечает- получаем ошибку
    }

    onPostsLoaded = (posts) => { //получает посты из базы данных и устанавливает посты в состояние
        this.setState({
            posts,
            error: false
        })
    };
        onError = (err) => { //при выводе ошибки переводит состояние компонента
          this.setState({
              error: true
          })
        };

        renderItems(array) {
            return array.map((item) => {
                const {name, altname, photo, src, alt, descr, id} = item;

                return (
                    <div key={id} className="post">
                        <User
                            src={photo}
                            alt={altname}
                            name={name}
                            min/>
                        <img alt={alt} src={src}/>
                        <div className="post__name">
                            {name}
                        </div>
                        <div className="post__descr">
                            {descr}
                        </div>
                    </div>
                )

            })
        }

    render() {
            const {error, posts} = this.state;
            if (error) {
                return <errorMessage/>
            }

            const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
            </div>
        )
    }
}