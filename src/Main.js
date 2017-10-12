import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import Container from './Container'
import Home from './Home'
import Explore from './Explore'
import Profile from './Profile'

class Main extends Component {
    static navigationOptions = {
        header: () => null
    }

    render() {
        return (
            <Container index={
                this.props.navigation.state.params ? 
                this.props.navigation.state.params.index : 0
            }>
                <Home navigation={this.props.navigation} user={this.props.data.user}/>
                <Explore navigation={this.props.navigation} user={this.props.data.user}/>
                <Profile navigation={this.props.navigation} user={this.props.data.user}/>
            </Container>
        )
    }
}

const UserQuery = graphql(gql `
    query UserQuery{
        user {
            id
            username
            address
        }
    }
`)

export default UserQuery(Main)