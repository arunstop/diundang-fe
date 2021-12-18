export default ({ $axios }, inject) => {
    // const api = $axios.create({
    //     baseURL: "https://dummyapi.io/data/v1/",
    //     timeout: 10123,
    //     headers: {
    //         'app-id': '61b496d30f7b4842f14579ef'
    //     }
    // })

    const api = $axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
        timeout: 11222,
        headers: {
            'app-id': '61b496d30f7b4842f14579ef'
        }
    })

    inject('API_DUMMY', {
        getComments: (callback) => {
            api.get('/comments')
                .then(response => {
                    callback(null, response.data)
                })
                .catch(callback)
            // console.log(api)
        },
        getPhotos: (callback) => {
            api.get('/photos', {
                params: {
                    albumId: '2'
                }
            })
                .then(response => callback(null, response.data))
                .catch(callback)
        }

    })
}