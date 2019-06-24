import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

export default class projects extends Component
{
    constructor( props )
    {
        super()
        this.state= { activeTab: 0}
    }

    toggleCategories = () =>
    {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{
                        width: '550px',
                        margin: 'auto'
                    }}>
                        <CardTitle style={{
                            color: "yellow",
                            height: "176px",
                            background: 'url(https://git.generalassemb.ly/NRotach/PikaPikaChu/raw/master/pug_portfolio/src/img/screenShot.png) center/cover'
                        }}>
                        Unit 1 Project:  PikaPikaChu
                        </CardTitle>
                        <CardText>
                            This project was developed using basic HTML/CSS and javascript. <br></br>
                            I adopted rock-paper-scissors to a pokemon theme<br></br>
                            Squirtle = rock = water <br></br>
			                Bulbasuar = paper = grass <br></br>
                            Charmander = scissors = fire <br></br>
                            <br></br>
                            Future plans: <br></br>
                            Bring in multiple other pokemon to use (all adhering to type specifications)<br></br>
                            Import stats from a pokemon API to remove tie potential, and instead base ties off of individual pokemon combat stats
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://git.generalassemb.ly/NRotach/PikaPikaChu" target="PikaPikaChu Github">Github</Button>
                            <Button colored href="https://pages.git.generalassemb.ly/NRotach/PikaPikaChu/" target="_blank">Live Demo</Button>
                        </CardActions>
                        {/* <CardMenu style={{
                            color: '#fff'
                        }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                </div>
            )
        } else if ( this.state.activeTab === 1 ) {
            return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{
                            width: '550px',
                            margin: 'auto'
                        }}>
                            <CardTitle style={{
                                color: "black",
                                height: "176px",
                                background: 'url() center/cover'
                            }}>
                            Unit 2 Project:  MongoDB Pokemon light api
                            </CardTitle>
                        <CardText>
                            This is the first API I created. <br></br>
                            Database created on MongoDB <br></br>
                            API was created with Node.js, Express, and Mongoose <br></br>
                            Hosted on Mongo Atlas <br></br>
                            Deployed via Heroku
                            </CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/OriginalTsynn/pokemonapi" target="Pokelite Github">Github</Button>
                                <Button colored href="https://floating-peak-48613.herokuapp.com/api/pokemon/" target="_blank">Live Demo</Button>
                            </CardActions>

                        </Card>
                    </div>
            )
        } else if ( this.state.activeTab === 2 ) {
            return (
                <div><h1>This is Full Stack</h1></div>
            )
        } else if ( this.state.activeTab === 3 ) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{
                        width: '550px',
                        margin: 'auto'
                    }}>
                        <CardTitle style={{
                            color: "black",
                            height: "176px",
                            background: 'url(https://github.com/OriginalTsynn/Capstone-Pong-AI-Mobile/raw/master/screenshot.png) center/cover'
                        }}>
                        Unit 4 Project:  2D Pong
                        </CardTitle>
                        <CardText>
                            This was my first attempt at making a complex game.
                            This project was made utilizing HTML/CSS, javascript, and the phaser library.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/OriginalTsynn/Capstone-Pong-AI-Mobile" target="Capstone Github">Github</Button>
                            <Button colored href="http://pingpangpong.surge.sh/" target="_blank">Live Demo</Button>
                        </CardActions>
                </Card>
            </div>            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.setState.activeTab} onChange={( tabId ) => this.setState( { activeTab: tabId } )} ripple>
                    <Tab>Front End Only</Tab>
                    <Tab>Back End Only</Tab>
                    <Tab>Full Stack</Tab>
                    <Tab>Phaser</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>


            </div>
        )
    }
}
