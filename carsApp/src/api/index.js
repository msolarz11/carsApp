import axios from 'axios'


const get = async (url) => {

    return new Promise(async (resolve, reject) => {

        setTimeout(async () => {
            try {
                const response = await axios.get(url)
                console.log("axios", response.data);
                resolve(response.data)
            } catch (err) {
                console.log(err);
                reject(err)
            }

        }, 500 + Math.random() * 1000);

    })
}

export const getCars = () => get("http://localhost:3000/cars")