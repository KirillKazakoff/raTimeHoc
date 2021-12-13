/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/destructuring-assignment */
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import time from './dateUtils';

function DateTime(props) {
    return <p className='date'>{props.date}</p>;
}

const dateTimeFormatter = (Component) => ({ date }) => {
    const timeTransformed = time.compareTime(date);
    return <Component date={timeTransformed} />;
};

const DateTimeFormatted = dateTimeFormatter(DateTime);

function Video(props) {
    return (
        <div className='video'>
            <iframe
                src={props.url}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
            />
            <DateTimeFormatted date={props.date} />
        </div>
    );
}

function VideoList(props) {
    return props.list.map((item) => (
        <Video key={nanoid()} url={item.url} date={item.date} />
    ));
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-12-13 13:24:00',
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-12-13 20:50:00',
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-12-03 23:16:00',
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-11-03 12:10:00',
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-10-01 16:17:00',
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2021-12-02 05:24:00',
        },
    ]);

    return <VideoList list={list} />;
}
