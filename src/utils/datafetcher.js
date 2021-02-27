import axios from "axios";

const BASE_URI = "https://hacker-news.firebaseio.com/v0";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URI}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(`${BASE_URI}/topstories.json`);
    const stories = await Promise.all(storyIds.slice(0, 50).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
