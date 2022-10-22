import axios from "axios";



 export default axios.create({
    baseURL:"https://address-from-to-latitude-longitude.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': '87cfd8f952msh797bc932135938bp12a0aajsnd0d132045342',
        'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      }
}
)