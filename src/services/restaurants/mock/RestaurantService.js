import { mocks } from "./index";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    // console.log(mocks[location])
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("not found")
        }

        resolve(mock)
    })
}

restaurantRequest().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})