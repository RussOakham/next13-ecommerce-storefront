import axios from 'axios'

let baseUrl = 'http://localhost:3030'

if (process.env.NODE_ENV !== 'development') {
	baseUrl = 'https://next13-ecommerce-storefront.vercel.app/'
}

export default axios.create({
	baseURL: baseUrl,
})
