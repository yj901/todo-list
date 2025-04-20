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

  @media screen and (max-width: 530px) {
    margin-bottom: 30px;
    .day {
      font-size: 1.4rem;
    }
  }
`;

const Dates = styled.div`
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

  @media screen and (max-width: 530px) {
    .date {
      font-size: 4rem;
    }
    .m-y {
      line-height: 1.4;
      font-size: 1.4rem;
    }
  }
`;

const DateArea = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.toLocaleString("en-US", { month: "long" });
  const date = today.getDate();
  const weekday = today.toLocaleString("en-US", { weekday: "long" });

  return (
    <DatesArea>
      <Dates>
        <span className="date">{date}</span>
        <div className="m-y">
          <span className="month">{month.toUpperCase()}</span>
          <span className="year">{year}</span>
        </div>
      </Dates>
      <p className="day">{weekday.toUpperCase()}</p>
    </DatesArea>
  );
};

export default DateArea;
