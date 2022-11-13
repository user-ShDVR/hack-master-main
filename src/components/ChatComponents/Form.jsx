import { React, useState } from 'react';

// "messageId": "2a0da872-f8a8-4316-bb23-02a1161ea84d",
// "text": "Привет, оператор!",
// "data": null,
// "messageType": "TEXT",
// "mediaUrl": null,
// "sender": 100500,
// "recipient": 100501,
// "dialogId": 1,
// "timestamp": 1668153997208

// "dialogId": 1,
// "text": "Привет всем участникам Hack & Change!",
// "messageType": "WIDGET",
// "data": "{\"widget\":\"custom data\"}",
// "mediaUrl": "https://cdn-icons-png.flaticon.com/512/945/945244.png"

const Form = ({ text, messageType, data, mediaUrl, recipient, user_id, }) => {
    const [color, setColor] = useState('#39B6EC')
    if (user_id == recipient) {
        setColor('#F0F4F7')
    }

    if (messageType == 'TEXT') {
        return (
            <h1 style={{ color: { color } }}>
                {text}
            </h1>
        );
    } else if (messageType == 'MEDIA') {
        return (
            <img style={{ width: '200px', height: 'auto' }} src={mediaUrl}>

            </img>
        )
    } else if (messageType == 'WIDGET') {
        return (
            <div>
                {data}
            </div>
        )
    }
    else {
        return (
            <p>Incorrect message</p>
        )
    }


}

export default Form;
