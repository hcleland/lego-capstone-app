const remoteURL = "http://localhost:5002"

export default {

    get(userName) {
        return fetch(`${remoteURL}/users?userName=${userName}`).then(e => e.json())
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
        return fetch(`https://rebrickable.com/api/v3/lego/sets/${input}-1/alternates/?key=6cb2b6112998a633081603ceb2951b1a&page=1&page_size=6`).then(e => e.json());
    },
    getInventory(input) {
        return fetch(`https://rebrickable.com/api/v3/lego/mocs/${input}/parts/?key=6cb2b6112998a633081603ceb2951b1a`).then(e => e.json());
    },

    getOneItem(id) {
        return fetch(`${remoteURL}/buildItems/${id}`).then(e => e.json())
    },

    getAllItems() {
        return fetch(`${remoteURL}/buildItems`).then(e => e.json())
    },

    getAllItemsById(id) {
        return fetch(`${remoteURL}/buildItems?userId=${id}`).then(e => e.json())
    },

    addListItem(listItem) {
        return fetch(`${remoteURL}/buildItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(listItem)
        }).then(e => e.json())
    },


    updateListItem(updatedItem) {
        return fetch(`${remoteURL}/buildItems/${updatedItem.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        }).then(data => data.json());
    },

    deleteListItem(id) {
        return fetch(`${remoteURL}/buildItems/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(e => e.json())
    }
}