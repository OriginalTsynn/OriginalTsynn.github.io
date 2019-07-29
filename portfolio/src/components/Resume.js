
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

export default class Resume extends Component
{
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ( { numPages } ) =>
    {
        this.setState( { numPages } );
    }

    render ()
    {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                {/* <iframe title="resume" src="../assets/NathanRotach.pdf" /> */}
                {/* <embed type="application/pdf"
                    src="../assets//NathanRotach.pdf"
                    width="600"
                    height="800"
                /> */}


                <iframe id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="100%"
                    height="800"

                    // srcDoc="https://github.com/OriginalTsynn/OriginalTsynn.github.io/blob/master/portfolio/src/assets/NathanRotach.pdf"
                    src="../assets/download.png">
                </iframe>

            </div>
        );
    }
}


// import React, { Component } from 'react'
// import { Document, Page } from "react-pdf"

// export default class resume extends Component
// {
//     state = { numPages: null, pageNumber: 1 }

//     onDocumentLoadSuccess = ( { numPages } ) =>
//     {
//         this.setState( { numPages } )
//     }

//     goToPrevPage = () =>
//         this.setState( state => ( { pageNumber: state.pageNumber - 1 } ) )
//     goToNextPage = () =>
//         this.setState( state => ( { pageNumber: state.pageNumber + 1 } ) )

//     render ()
//     {
//         return (
//             <div>
//                 <h1> resume </h1>
//                 {/* <embed src="../assets/NathanRotach.pdf" width="800px" height="2100px" /> */}
//                 {/* <embed src="file_name.pdf"  /> */}
//                 <div style={{ width: 600 }}>
//                     <Document
//                         file="../assets/NathanRotach.pdf"
//                         onLoadSuccess={this.onDocumentLoadSuccesss}
//                     >
//                     </Document>
//                 </div>
//             </div>
//         )
//     }
// }
