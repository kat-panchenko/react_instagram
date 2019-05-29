import React from 'react';
import User from './user';
import Pallete from './pallete';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://ukranews.com/upload/news/2018/05/20/5931181a063c6-899_1200.jpg?v=1"
                alt="photo"
                name="Elon Mask"
            />
            <Pallete/>
        </div>
    );
};

export default Profile;