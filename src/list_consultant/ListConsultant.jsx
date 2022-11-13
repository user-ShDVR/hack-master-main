import React from 'react';
import ConsultantCard from '../components/ConcultantCard/ConsultantCard';
import './ListConsultant.css'
// import { CarouserlWrapper } from 'react-pretty-carousel'

// return <ConsultantCardItem card={card} key={card.id} index={index} name={card.name} clients={card.clients} rating={card.rating} earning={card.earning} img_src={card.img_src} />



const ListConsultant = () => {
    let cards = [{
        name: 'Маслов А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg',
    },
    {
        name: 'Кирин А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://www.back2thewind.com/wp-content/uploads/2020/02/testi-2-2.jpg',
    },
    {
        name: 'Шнюков А.И.',
        clients: 52,
        rating: 4.58,
        earning: '+20%',
        img_src: 'https://avatars.mds.yandex.net/i?id=d36979301ebc80156f88a6e76602df2a-4580514-images-thumbs&ref=rim&n=33&w=300&h=300',
    },


    ];
    return (
        <div className='content'>

            <div className='list_consultants'>
                {cards.length ? <ConsultantCard cards={cards} /> : <p>Увы, экспертов нет</p>}
                
                


            </div>
        </div>
    );
}

export default ListConsultant;
