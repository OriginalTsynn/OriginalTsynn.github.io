import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


export default class about extends Component {
    render() {
        return (
            <div className="about-body">
            <Grid className="contact-grid">
                <Cell col={8}>
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
                            {/* I guess I should have known a long time ago I'd end up as a software engineer.  My journey into programming started when I was 12 years old, by winning blue ribbon for my 6th grade science fair from making the schools first professional grade webiste. <br></br>
                            Shortly after that, I started programming games in middle school on the TI-83 calculator.  <br></br>
                            Fast forward a little to high school, and I started really getting in to PC based gaming, and as a result, my interest in coding was sparked, so I started studying C++ <br></br>
                            It's been a long road, but I've finally cmoe back to programming after doing nothing with it for a decade. */}

                            I’ve always had a passion for web design and game design since as far back as I can remember.
                            I started making websites in the mid 1990s, and making games on the TI-83 in the late 1990s.
                            I always knew I wanted to go down this path, and really learn how to bring ideas to life.
                            To that end, as of March 2019, I decided to put my life on hold, and embark an a journey to learn how to code at General Assembly.<br></br><br></br>

                            One of favorite technologies we learned there was React I'm not the greatest with it yet, but I see so much potential with it, heck, this portfolio is done in React!  It's a really powerful tool I suggest most people interested in building websites learn early on.
                            <br></br>
                            <br></br>

                            In my free time, when not programming, I like to keep my senses sharp by passionately participating in gaming.  <br></br>
                            When not programming or gaming, I spend a lot of time working with my wonderful dogs, 2 female doberman, age 3.
                    </p>

                    </Cell>
                </Grid>

            </div>
        )
    }
}
