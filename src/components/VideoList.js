import React from 'react';
import VideoItem  from './VideoItem';

const VideoList = (props) => {
    const renderedrList = props.videos.map((video) => {
        return(
            <VideoItem video={video} onVideoSelect={props.onVideoSelect}/>
        );
    });

    return(
        <div className="ui relaxed divided list">{renderedrList}</div>
    );
};

export default VideoList;