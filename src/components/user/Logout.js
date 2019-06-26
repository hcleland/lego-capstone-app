export default class Logout extends Component {

    handleLogout = e => {
        e.preventDefault();

        ApiManager.get(this.state.userName).then(result => {
            console.log("result", result);
            if (result.length > 0) {
                sessionStorage.setItem(
                    "credentials",
                    JSON.stringify({
                        userName: this.state.userName,
                        password: this.state.password
                    })
                )
                this.props.history.push("/");
            } else {
                alert("Please sign up");
            }
        });
    }

}