import axios from "axios";

const state = {
	token: null,
	refresh_Token: null,
};

const getters = {
	isAuthenticated: (state) => !!state.token,
	stateToken: (state) => state.token,
	stateRefreshToken: (state) => state.refreshToken,
};

const actions = {
	async register({ dispatch }, form) {
		await axios.post("user", form);
		const userForm = new FormData();
		userForm.append("mail", from.mail);
		userForm.append("password", from.password);
		await dispatch("login", userForm);
	},

	async login({ commit }, user) {
		console.log("hey");
		const res = await axios.get("/auth", {
			auth: {
				username: user.mail,
				password: user.password,
			},
		});
		await commit("setToken", res.data.access_token);
		await commit("setRefreshToken", res.data.refresh_Token);
	},
};

const mutations = {
	setToken: (state, token) => (state.token = token),
	setRefreshToken: (state, refreshToken) =>
		(state.refreshToken = refreshToken),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
