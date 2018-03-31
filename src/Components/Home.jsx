import React, { Component } from 'react';
import { Button } from 'mdbreact';

import Carousel from './Carousel.jsx';

export default class Home extends Component {
    
    render() {
        return (
            <div className="container-fluid">
                <Carousel />
                <div className='container my-4 justify-content-center' id="main">
                    <div className='row main'>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 border-top border-bottom text-center'>
                            <h4 className='font-weight-bold py-4'>WE TEACH YOUNG MEN THE ART OF WORK</h4>
                            <Button outline color="elegant mb-4">LEARN MORE</Button>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 