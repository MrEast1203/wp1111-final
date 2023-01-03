import React from "react";
import styled from "styled-components";

const EventWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #261326, #c94f44);
  padding: 1rem;
  box-sizing: border-box;
`;

const EventImg = styled.img``;

const EventDescription = styled.div``;

const EventOptions = styled.ul``;

const Event = () => {
  return (
    <EventWrapper>
      <EventImg />
      <EventDescription></EventDescription>
      <EventOptions></EventOptions>
    </EventWrapper>
  );
};

export default Event;
