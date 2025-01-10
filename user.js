import { BASE_URL, API_KEY } from './utils.js'

const userData ={
    "email": "melikam84@email.com",
    "password": "23456789",
};

export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            headers: {
                api_key: API_KEY,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            throw new Error("there is a problem")
        }

        const result = await response.json()
        console.log(result)
        localStorage.setItem("access-token",result.accessToken)
         return result
    }
 catch(err){
    console.log(err)
 }}

