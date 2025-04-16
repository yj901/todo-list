import React from "react";
import styled from "styled-components";

const DatesArea = styled.div`
  font-family: var(--paperlogy);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  .day {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const Date = styled.div`
  display: flex;
  gap: 10px;
  span {
    display: inline-block;
  }
  .date {
    font-size: 5rem;
    font-weight: 500;
  }
  .m-y {
    color: var(--border2-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
const DateArea = () => {
  return (
    <DatesArea>
      <Date>
        <span className="date">15</span>
        <div className="m-y">
          <span className="month">APRIL</span>
          <span className="year">2025</span>
        </div>
      </Date>
      <p className="day">TUESDAY</p>
    </DatesArea>
  );
};

export default DateArea;
