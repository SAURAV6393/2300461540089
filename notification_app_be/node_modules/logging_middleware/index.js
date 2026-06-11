// logging_middleware/index.js

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYXVyYXZyYWpwdXQ5ODM5QG1wZ2kuZWR1LmluIiwiZXhwIjoxNzgxMTcxMDk2LCJpYXQiOjE3ODExNzAxOTYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4MjBlNzRmZC0wNjc5LTQyOGEtYmY4Mi02MTlmNmIwNTg1NDQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYXVyYXYgcmFqcHV0Iiwic3ViIjoiZGMyYjEwMzItNTU5MS00MTg0LThkMGYtOWUzYzY2OWU4NzdkIn0sImVtYWlsIjoic2F1cmF2cmFqcHV0OTgzOUBtcGdpLmVkdS5pbiIsIm5hbWUiOiJzYXVyYXYgcmFqcHV0Iiwicm9sbE5vIjoiMjMwMDQ2MTU0MDA4OSIsImFjY2Vzc0NvZGUiOiJCQVZEU2giLCJjbGllbnRJRCI6ImRjMmIxMDMyLTU1OTEtNDE4NC04ZDBmLTllM2M2NjllODc3ZCIsImNsaWVudFNlY3JldCI6ImVOWnR5emRDRll5d0tFbkQifQ.ZFUspkNJr9sQu5PGwO0tPe_ei-RGFFS3M4c0dKcu6cc";
async function Log(stack, level, packageName, message) {
    const apiUrl = "http://4.224.186.213/evaluation-service/logs";
    const requestBody = { stack, level, package: packageName, message };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ACCESS_TOKEN}`
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            console.error("Log Error:", response.status);
        }
    } catch (error) {
        console.error("API Error:", error);
    }
}

module.exports = { Log };