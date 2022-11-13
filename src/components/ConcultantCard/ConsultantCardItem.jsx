import React from 'react';
import './ConsultantCard.css'

const ConsultantCardItem = ({card, name, clients, rating, earning, img_src}) => {
    return (
        <div>
            <div className='content_card'>
                <div className="main_info_">
                    <img
                        // src="https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"
                        src={img_src}
                        alt="image"
                    ></img>
                    <div>
                        <h4>Консультант</h4>
                        <h1>{name}</h1>
                    </div>
                </div>

                <div className="round_rating_">
                    <h3>Индекс доверия</h3>
                    <div>
                        A+
                    </div>
                </div>
                <div className="quantity_clients">
                    <h3 className="label">Количество клиентов</h3>
                    <h3 className="data">{clients}</h3>
                </div>
                <div className="rating">
                    <h3 className="label">Средняя оценка</h3>
                    <h3 className="data">{rating}</h3>
                </div>
                <div className="earning">
                    <h3 className="label">Средняя доходность</h3>
                    <h3 className="data">{earning}</h3>
                </div>
            </div>


        </div>

    );
}

export default ConsultantCardItem;