import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { } from 'mdbreact';

import Tables_Car from './Tables_Car';
import Edge_Car from './Edge_Car';
import Other_Car from './Other_Car'

export default class Gallery extends Component {

    render() {
        return (
            <Fragment id='wrap'>
                <div className='container my-2 justify-content-center' id="main">

                    <div className='row main pt-5 '>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 text-center'>
                            <h1 className='font-weight-bold mt-5'>Photo Gallery</h1>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>

                    <div className='row main pt-2 mb-4'>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 border-bottom text-center'>
                            <h2 className='mb-5 mt-3'>Tables</h2>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
                    <div className='row main  mb-4'>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-8 text-center'>
                            <Tables_Car />
                        </div>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>

                    <div className='row main pt-5 mb-4'>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 border-bottom text-center'>
                            <h2 className='mb-5 mt-3'>Live Edge</h2>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
                    <div className='row main  mb-4'>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-8 text-center'>
                            <Edge_Car />
                        </div>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
            
                    <div className='row main pt-5 mb-4'>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 border-bottom text-center'>
                            <h2 className='mb-5 mt-3'>Other Customs</h2>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
                    <div className='row main  mb-4'>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-8 text-center'>
                            <Other_Car />
                        </div>
                        <div className='col-md-2'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>

                    <div className='row main pt-5 mb-4'>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                        <div className='col-md-6 border-bottom text-center'>
                            <h2 className='mb-5 mt-3'>Smalls</h2>
                        </div>
                        <div className='col-md-3'>
                            <p className='invisible'>.</p>
                        </div>
                    </div>
                    <div className='row main mb-4'>
                        <div className='col-md-3 smalls'>
                            <img src="../pics/small_1.jpg" />
                        </div>
                        <div className='col-md-3 smalls'>
                            <img src="../pics/small_2.jpg" />
                        </div>
                        <div className='col-md-3 smalls'>
                            <img src="../pics/small_3.jpg" />
                        </div>
                        <div className='col-md-3 smalls'>
                            <img src="../pics/small_4.jpg" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
} 