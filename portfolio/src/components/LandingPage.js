import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export default class landingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://imagizer.imageshack.com/v2/280x200q90/924/iR5Arh.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Software Engineer</h1>

                            <hr />

                            <p>
                                HTML/CSS | JavaScript | MongoDB | Express | React | NodeJS | Python | Django | Phaser
                            </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/nathan-rotach-47464bb8/" target="_blank"  rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/OriginalTsynn?tab=repositories" target="_blank"  rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>


                        </div>

                    </Cell>

                </Grid>

            </div>
        )
    }
}
