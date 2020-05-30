import React from 'react';
import VideoItem  from './VideoItem';

const VideoList = (props) => {
    const renderedrList = props.videos.map((video) => {
        return(
            <VideoItem video={video}/>
        );
    });

    return(
        <div>{renderedrList}</div>
    );
};

export default VideoList;