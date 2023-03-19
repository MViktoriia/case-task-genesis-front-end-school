import axios from "axios";

const BASE_URL = "https://api.wisey.app/api/v1";

const instance = axios.create({
	baseURL: BASE_URL,
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmIzZDBlOS1kYjhjLTRhZGUtOWFlZi1mYWYxZWUwOGMwOTkiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MTQyMTAsImV4cCI6MTY3OTcxNDIxMH0.VXQMnnQpWOE62JASAjW3gqXr9rQ8So9YG4x-wKsgP1I",
	},
});

// const token = {
// 	set(token) {
// 		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// 	},
// 	unset() {
// 		instance.defaults.headers.common.Authorization = "";
// 	},
// };

// export const getToken = async () => {
// 	try {
// 		const { data } = await instance.get(
// 			"/auth/anonymous?platform=subscriptions"
// 		);
// 		token.set(data.token);
// 		console.log(data.token);
// 		return data.token;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export const fetchCourses = async () => {
	const res = await instance.get("/core/preview-courses");
	return res;
};

export const fetchCourseDetails = async (id) => {
	const res = await instance.get(`/core/preview-courses/${id}`);
	return res;
};
