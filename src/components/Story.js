import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

const Story = (props) => {
  return (
    <ListGroup.Item key={props.id}>
      <StoryHeader>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </StoryHeader>
      <StoryFooter>
        <p>
          {props.score} points | Posted by {props.by} | {props.descendants}{" "}
          comments
        </p>
      </StoryFooter>
    </ListGroup.Item>
  );
};

export default Story;

// Styled components

const StoryHeader = styled.div`
  display: flex;
  align-items: center;

  > a {
    color: #d3d6db;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 5px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const StoryFooter = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 0.8rem;
  }
`;
