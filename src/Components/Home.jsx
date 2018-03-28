import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'mdbreact';

import Car from './Carousel.jsx';

export default class Home extends Component {
    
    render() {
        return (
            <Fragment id='wrap'>
                <Car />
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
            </Fragment>
        );
    }
} 