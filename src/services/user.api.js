import { Component } from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Users extends Component{
    constructor(){
        super();
        this.state={
            users :null,
            isLoading:true
        }
    }

    async componentDidMount(){
        const url='https://run.mocky.io/v3/c40fc593-7594-431e-b4df-105c5aae20d6';
        const response=await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({users:data,isLoading:false});
    }
    render(){
        return (
            <div className="container">
                <div>
                    {this.state.isLoading || !this.state.users ? (
                        <div>loading...</div>
                    ):(
                        <div>
                            <ReactBootstrap.Card style={{ width: '18rem' }}>
                            <ReactBootstrap.Card.Header className="card-header">
                            <ReactBootstrap.Card.Img variant="top" roundedCircle className="user-profile" src="user.png" />
                            </ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Card.Title className="username-alt">{this.state.users.firstName} {this.state.users.lastName}</ReactBootstrap.Card.Title>
                                <address>
                                <ReactBootstrap.Card.Text>
                                <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.state.users.address},</div>
                                <div>{this.state.users.city},{this.state.users.postcode},{this.state.users.country}</div>
                                </ReactBootstrap.Card.Text>
                                </address>
                                <hr></hr>
                                <div className="detail-btn">
                                <ReactBootstrap.Button variant="primary">View details</ReactBootstrap.Button>
                                </div>
                            </ReactBootstrap.Card.Body>
                            </ReactBootstrap.Card>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default Users;