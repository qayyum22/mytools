import React from "react";
import QueueHeader from "../components/QueueHeader";
import Sidebar from "../components/Sidebar";
import AudioLabel from "../components/AudioLabel";

import audio from './2024a5f63d01.wav'
import AudioWaveform from "../components/AudioWaveform";

const ProductionTool = () => {

    const queueinfo = {
        id: 123,
        name:'asr',
        version:2,
        so:125
    }

    // useEffect(() => {
    // fetch queueinfo from API
    // },[])

    return (
        <div>
            <h1>
                Production Tool
                {/* Header with queue details */}
                <QueueHeader queueinfo={queueinfo}  />

                <div style={{display:"flex", flexDirection:'column'}}>
                    <Sidebar />
                    <AudioLabel />
                    <AudioWaveform audioUrl={audio} />
                    
                </div>

                {/* sidebar for easy access to tasks */}

                {/* main section - for audio tasks, with labelling form */}




            </h1>
        </div>
    );
};

export default ProductionTool;