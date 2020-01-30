import React, { Component } from 'react'
import UsersCard from '../molecules/UserCard'
import axios from 'axios'
import UserGrid from '../organisms/UserGrid'

class Users extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users',{method:'get'}).then(response => response.json())
        .then(json => {
            this.setState({
                users:json
            })
        })
    }*/
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            this.setState({
                users:resp.data
            })
        })
    }

    render(){
        const { users } = this.state
        return(
            <UserGrid users = {users} />
        )
    }
}
export default Users