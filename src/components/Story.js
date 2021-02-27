import React from "react";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";

const Story = (props) => {
  return (
    <ListGroup.Item key={props.id}>
      <StoryHeader>
        <h3>{props.title}</h3>
        <a href={props.url} target="_blank" rel="noreferrer">
          (Read more ..)
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

  > h3 {
    color: #d3d6db;
    font-size: 1.3rem;
    font-weight: 700;
  }

  > a {
    cursor: pointer;
    font-size: 0.7rem;
    color: #f8f6f6;
    padding-left: 7px;

    :hover {
      color: #dbe2ef;
    }
  }
`;

const StoryFooter = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 0.8rem;
  }
`;
