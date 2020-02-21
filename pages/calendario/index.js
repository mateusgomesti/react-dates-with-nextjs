import React from 'react';
import dynamic from "next/dynamic";

const CalendarNOSSR = dynamic(
    () => import ('../../components/AirbnbCalendar/'),
    {
        ssr: false
    }
)

const Home = () => {
    return (
        <>
            <CalendarNOSSR />
        </>
    );
}

export default Home;