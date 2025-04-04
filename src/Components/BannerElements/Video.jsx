import $ from 'jquery';
import React, { useEffect } from 'react';

const Video = (props) => {
    useEffect(() => {
        // Youtube
        var $ytvideoTrigger = $(".ytplay_btn");
        $ytvideoTrigger.on("click", function (evt) {
            $(".ytube_video").addClass("play");
            $("#ytvideo")[0].src += "?autoplay=1";
        });

    }, []);
    return (
        <div className="video_post">
            <div className="ytube_video">
                <iframe id="ytvideo" src="https://www.youtube.com/embed/fEErySYqItI" allow="autoplay;" allowfullscreen></iframe>
                <div className="post_content">
                    <div className="ytplay_btn"><i className="ion-ios-play"></i></div>
                    <img src={props.bg} alt="blog" />
                </div>
            </div>
        </div>
    );
};

export default Video;