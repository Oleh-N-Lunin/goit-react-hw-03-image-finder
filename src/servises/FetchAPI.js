function fetchImage(imageName, page) {
    const KEY = "21886908-2dadc690508cf849d5de61581";
    const LINK = "https://pixabay.com/api/";

    return fetch(
        `${LINK}?${KEY}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    ).then((req) => {
        if (req.ok) {
            return req.json();
        }

        return Promise.reject(new Error("Don't have image"));
    });
}

const api = {
    fetchImage,
};

export default api;