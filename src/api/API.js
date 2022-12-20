const BASE_URL = "https://strangers-things.herokuapp.com/api/2209-FTB-PT-WEB-PT";

export async function registerUser(user) {
    const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();
    return result;
}

export async function userLogin(user) {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();
    return result;
}

export async function fetchAllPost () {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result.data.posts;
}

export async function fetchSinlePost (postId) {
    const response = await fetch(`${BASE_URL}/posts/${postId}`)
    const result = await response.json();
    return result.data.posts;
}

export async function userPost(user) {
    const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TOKEN_STRING_HERE'
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();
    return result.posts;
}

// export async function messagesToUser (messages) {
//     const response = await fetch(`${BASE_URL}/users/me`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer TOKEN_STRING_HERE'
//         },
//         body: JSON.stringify(messages)
//     })
//     const result = await response.json();
//     return result.messages;
// }

// export async function messageFromUser (messages) {
//     const response = await fetch(`${BASE_URL}/users/me`, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer TOKEN_STRING_HERE'
//         },
//         body: JSON.stringify(messages)
//     })
//     const result = await response.json();
//     return result.messages;
// }

// export async function messagesFromSinglePost (message, postId) {
//     const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
//         method: "POST",
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(message)
//     })
//     const result = await response.json();
//     return result.data.message;
// }

export async function sendMessage (message, postId) {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    const result = await response.json();
    return result.data.message;
}

export async function addNewPost (post) {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const result = await response.json();
    return result.data.post;
}

export async function editPost (post, postId) {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const result = await response.json();
    return result.data.post;
}

export async function deletePost (postId) {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
    })
    const result = await response.json();
    return result;
//     try {
//         const response = await fetch(`${BASE_URL}/posts/${postId}`, {
//             method: "DELETE",
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         })
//         const result = await response.json();
//         if (result.error) throw result.error;
//         return;
//     } catch (error) {
//      console.error(`Trouble removing ${postId}!`, error);
//     }
}