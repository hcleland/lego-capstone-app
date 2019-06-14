const remoteURL = "http://localhost:5002"

export default {

    get(userName) {
        return fetch(`${remoteURL}/users?user_name=${userName}`).then(e => e.json())
    },

    getAll() {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },

    post(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(e => e.json())
    },
    getAlternate(input) {
        return fetch(`https://rebrickable.com/api/v3/lego/sets/${input}/alternates/?key=KEY&page=1&page_size=6`).then(e => e.json());
    },
    getInventory(input) {
        return fetch(`https://rebrickable.com/api/v3/lego/mocs/${input}/parts/?key=KEY`).then(e => e.json());
    }
}