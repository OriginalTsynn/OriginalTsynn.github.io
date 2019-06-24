import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

export default class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nathan Rotach</h2>
                        <img
                            src="https://media.licdn.com/dms/image/C4D03AQF8NH2hbu3V3g/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=HqYRtwrTcDeSwZXbuEG9HIUXX1zrdpxn8Bt3W9ZNZGc"
                            alt="avatar"
                            style = {{height: '250px'}}
                        />

                        <p style={{
                            width: "75%",
                            margin: "auto",
                            paddingTop: "1em"
                        }}>
                            I'm an insatiably innately inquisitive full stack software engineer.
                            I turn challenges into opportunities that result in elegantly simple solutions.<br></br><br></br>
                            In my free time, when not programming, I like to keep my senses sharp by passionately participating in gaming.  <br></br>
                            When not programming or gaming, I spend a lot of time working with my wonderful dobies!
                        </p>

                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (703)626-0637
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        nathan.rotach@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{
                                        fontSize: '30px',
                                        fontFamily: 'Anton'
                                    }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (703)626-0637
                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
