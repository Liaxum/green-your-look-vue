import axios from "axios";

const state = {
    categories: [],
};

const getters = {
	stateCategories: (state) => state.categories,
};

const actions = {
    async getCategories({commit}) {
        await commit("setCategories", await (await axios.get('categories')).data);
    },
    async createCategorie({dispatch}, form) {
        await axios.post('categories', form);
        await dispatch("getCategories")
    },
    async updateCategories({dispatch}, form, id) {
        await axios.put(`categories/${id}`, form);
        await dispatch("getCategories");
    },
    async deleteCategory({dispatch},id) {
        await axios.delete(`categories/${id}`);
        await dispatch("getCategories");
    }
};

const mutations = {
	setCategories: (state, categories) => (state.categories = categories),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
