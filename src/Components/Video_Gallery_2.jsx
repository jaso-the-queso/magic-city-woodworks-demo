import React, { Component } from "react";
import { View } from "mdbreact";
import { Link } from "react-router-dom";

export default class Video_Gallery_2 extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 pt-5 justify-content-center">

                    <div className="row main mt-4 ">
                        <div className="col-md-2">
                            <p className="invisible">.</p>
                        </div>
                        <div className="col-md-8 text-center">
                            <h1 className="font-weight-bold">Video Gallery</h1>
                        </div>
                        <div className="col-md-2">
                            <Link to="/gallery" className="text-right black-text">Photo Gallery</Link>
                        </div>
                    </div>

                    <div class="vid-container">
                        <iframe src="https://player.vimeo.com/video/184805896" title="Magic City Woodworks Video" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>

                    <div className="container scroll">
                        <div className="d-flex justify-content-start">
                            <a href="/video_gallery_1">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_1.png" alt="thumbnail 1" />
                                        </div>
                                    </View>
                                </div>
                            </a>


                            <a href="/video_gallery_2">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_2.png" alt="thumbnail 2" />
                                        </div>
                                    </View>
                                </div>
                            </a>


                            <a href="/video_gallery_3">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_3.png" alt="thumbnail 3" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_4">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_4.png" alt="thumbnail 4" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_5">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_5.png" alt="thumbnail 5" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_6">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_6.png" alt="thumbnail 6" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_7">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_7.png" alt="thumbnail 7" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_8">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_8.png" alt="thumbnail 8" />
                                        </div>
                                    </View>
                                </div>
                            </a>

                            <a href="/video_gallery_9">
                                <div class="vid-item">
                                    <View zoom>
                                        <div class="thumb">
                                            <img src="../pics/video_9.png" alt="thumbnail 9" />
                                        </div>
                                    </View>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
