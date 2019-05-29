import React, {Component} from 'react';
import User from './user';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                    alt="actress"
                    name="Halle Berry"
                    min/>
                <img alt={this.props.alt} src={this.props.src}/>
                <div className="post__name">
                    account
                </div>
                <div className="post__descr">
                    my post description
                </div>
            </div>
        )
    }
}