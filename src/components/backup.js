class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    // addUser = user =>
    //     LoginManager.post(user)
    //         // .then(() => LoginManager.getAll('users'))
    //         .then(newUser => {
    //             this.setState({
    //                 currentUser: user
    //             })
    //             console.log("new user", newUser)
    //         }
    //         )

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewUser = evt => {
        evt.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
        };
        console.log("user", user)

        this.addUser(user).then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SignupModal;


<React.Fragment>
    <div>
        <h1 id="userHeader">User's Build List</h1>
        <section className="buildList">
            {this.props.buildItems.map(buildItem =>
                <Card>
                    <div key={buildItem.id} className="buildItem_card">
                        {/* <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" /> */}
                        <CardBody>
                            <CardTitle><h3>{buildItem.mocName}</h3></CardTitle>
                            <CardSubtitle>{buildItem.mocNumber}</CardSubtitle>
                            <CardText>
                                <p><a href={buildItem.mocURL} target="_blank">Instructions: </a></p>
                                {/* <p>Number of bricks used: {result.num_parts}</p> */}
                                <Label for="exampleText">Notes:</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </CardText>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    I Built This!
                            </Label>
                            </FormGroup>
                            {/* <Button onClick={() => this.getInventory(result.set_num)} color="primary">Edit</Button> */}
                            <p></p>
                            <Button tag={Link} to="/buildList" className="customBtnEdit">Edit</Button>
                            <div className="divider" />
                            {/* <Button onClick={() => this.getInventory(result.set_num)} color="danger">Add to Build List</Button> */}
                            <Button tag={Link} to="/buildList" className="customBtnDelete">Delete

                        </Button>
                        </CardBody>
                    </div>
                </Card>
            )}
        </section>
    </div>
</React.Fragment>


Cut & Pasted Wed at 1: 57

    < section >
    {
        this.props.buildItems.map(buildItem =>
            < Card key={buildItem.id} >
                <div className="buildItem_card">
                    {/* <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" /> */}
                    <CardBody>
                        <CardImg top width="100%" src={buildItem.moc_img_url} alt="Card image cap" />
                        <CardTitle><h3>{buildItem.name} </h3></CardTitle>
                        <CardSubtitle>{buildItem.set_num}: <a href={buildItem.moc_url} target="_blank">Instructions</a></CardSubtitle>
                        {/* <CardText>
        <a href={buildItem.moc_url} target="_blank">Instructions</a>
        </CardText>
        <CardLink href={buildItem.moc_url}>Instructions</CardLink> */}
                        <CardText>
                            {/* <p>Number of bricks used: {result.num_parts}</p> */}
                            <Label for="exampleText">Notes:</Label>
                            <Input type="text" name="text" id="exampleText" onChange={this.handleFieldChange} defaultValue={this.state.textAreaValue} />
                        </CardText>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                I Built This!
    </Label>
                            {/* <Button onClick={() => this.getInventory(result.set_num)} color="primary">Edit</Button> */}
                        </FormGroup>
                        <p></p>
                        <Button tag={Link} to="/buildItems" className="customBtnEdit" onClick={this.updateExistingItem}>Save Notes</Button>

                        <div className="divider" />
                        <Button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteItem(buildItem.id)
                                )
                            }
                        }>Delete</Button>
                    </CardBody>
                </div>
            </Card>
        )
    }
</section >