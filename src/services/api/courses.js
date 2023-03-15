import axios from "axios";

const BASE_URL = "http://api.wisey.app/api/v1";
const PROXY_URL = "https://proxy-ibmasyzzya-uc.a.run.app/";

const instance = axios.create({
	baseURL: PROXY_URL + BASE_URL,
});

const token = {
	set(token) {
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		instance.defaults.headers.common.Authorization = "";
	},
};

export const getToken = async () => {
	try {
		const { data } = await instance.get(
			"/auth/anonymous?platform=subscriptions"
		);
		token.set(data.token);
		console.log(data.token);
		return data.token;
	} catch (err) {
		console.log(err);
	}
};

// let script = document.createElement("script");
// script.src = `http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions/token.json?callback=getToken`;
// document.body.append(script);

export const fetchCourses = async () => {
	const res = await instance.get("/core/preview-courses");
	console.log(res.data.courses);
	return res.data.courses;
};
