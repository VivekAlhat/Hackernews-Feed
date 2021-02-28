import { useState, useEffect } from "react";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import Story from "./components/Story";
import { getStories } from "./utils/datafetcher";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStories()
      .then((s) => {
        setStories(s);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <h3># Hackernews Feed</h3>
        <IconsContainer>
          <span>
            <a
              href="https://www.github.com/VivekAlhat"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </span>
          <span>
            <a
              href="https://www.twitter.com/crypticmedusa"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </span>
        </IconsContainer>
      </HeaderContainer>
      <ListContainer>
        {isLoading ? (
          <SpinnerContainer>
            <Spinner animation="border" variant="secondary" />
          </SpinnerContainer>
        ) : (
          <ListGroup>
            {stories.map((e, index) => (
              <Story
                key={e.data.id}
                title={e.data.title}
                url={e.data.url}
                score={e.data.score}
                by={e.data.by}
                descendants={e.data.descendants}
              />
            ))}
          </ListGroup>
        )}
      </ListContainer>
    </Container>
  );
}

export default App;

// Styled components

const HeaderContainer = styled.div`
  color: #63686e;
  display: flex;
  justify-content: space-between;

  > h3 {
    font-weight: 700;
  }
`;

const ListContainer = styled.div`
  margin-top: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  > span {
    cursor: pointer;

    > a {
      color: #63686e;
      :hover {
        color: #ebebe3;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
