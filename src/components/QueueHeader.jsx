import React from "react";

const QueueHeader = ({queueinfo}) => {


    return (
        <div style={{width: '100%', height:'50px', margin:'10px', backgroundColor:'lightgray' }}>
            <div>
                <ul style={{display: "flex", justifyContent: "space-around", alignItems:"center"}} >
                    <li>{queueinfo.id}</li>
                    <li>{queueinfo.name}</li>
                    <li>{queueinfo.version}</li>
                    <li>{queueinfo.so}</li>
                </ul>
            </div>
        </div>
    )
}

export default QueueHeader;