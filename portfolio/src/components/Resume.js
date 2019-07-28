import React, { Component } from 'react'
import { Document, Page } from "react-pdf"

export default class resume extends Component
{
    state = { numPages: null, pageNumber: 1 }

    onDocumentLoadSuccess = ( { numPages } ) =>
    {
        this.setState( { numPages } )
    }

    goToPrevPage = () =>
        this.setState( state => ( { pageNumber: state.pageNumber - 1 } ) )
    goToNextPage = () =>
        this.setState( state => ( { pageNumber: state.pageNumber + 1 } ) )

    render ()
    const { pageNumber, numPages } = this.state
{
    return (
        <div>
            <h1> resume </h1>
            {/* <embed src="../assets/NathanRotach.pdf" width="800px" height="2100px" /> */}
            {/* <embed src="file_name.pdf"  /> */}
            <div style={{ width: 600 }}>
                <Document
                    file="../assets/NathanRotach.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccesss}
                >
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
            </div>
        </div>
    )
}
}
