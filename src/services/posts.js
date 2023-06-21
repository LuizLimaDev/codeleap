import instance from "./instance";

const postService = async (data) => {
    const response = await instance.post('/', data);
    return response.data;
};

export default postService;