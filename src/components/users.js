import React from 'react';
import User from './user';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                alt="actress"
                name="Halle Berry"/>
            <div className="users__block">
                <User
                    src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                    alt="actress"
                    name="Halle Berry"
                    min/>
                <User
                    src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                    alt="actress"
                    name="Halle Berry"
                    min/>
                <User
                    src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                    alt="actress"
                    name="Halle Berry"
                    min/>
                <User
                    src="https://static.businessinsider.sg/2019/03/03/5c7feb69eb3ce83b44531ba6.png"
                    alt="actress"
                    name="Halle Berry"
                    min/>
            </div>
        </div>
    )
}