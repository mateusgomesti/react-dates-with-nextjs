import React from 'react';
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates'; 

const Wrapper = styled.div`
    .DateRangePickerInput {
        border: none;
        background: none;
    }
    .CalendarDay {
        transition: all 1000 ease-in-out;
    }
`;

const Calendario = () => {
    return (
        <Wrapper>
            <DateRangePicker />
        </Wrapper>
    );
}

export default Calendario;