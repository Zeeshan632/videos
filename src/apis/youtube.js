import axios from "axios";

const Key = "AIzaSyD6OV0sXMQBqtNyzA0RHBGjserl9wwPg6s";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: Key,
	},
});
