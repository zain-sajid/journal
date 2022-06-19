import React from 'react';
import axios from 'axios'

const Settings = () => {
    const [IoTChannel, setIoTChannel] = React.useState();
    React.useEffect(() => {
        const fetchIoTChannel = async () => {
            try {
                const data = await axios.get('https://api.thingspeak.com/channels/1773828.json?api_key=0M1SSJLEI0UMM6XR')
                setIoTChannel(data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchIoTChannel()
    }, [])
    return (
        (IoTChannel !== undefined && <>
            <div className="settings-container">
                <h3>IoT Channel Name: {IoTChannel.name.toUpperCase()}</h3>
                <h3>IoT Channel ID: {IoTChannel.id}</h3>
                <h3>IoT Channel Ranking: {IoTChannel.ranking}</h3>
                <h3>IoT Channel API Key: {IoTChannel.api_keys[0].api_key}</h3>
                <h3>Further Information: <a className="btn btn-primary me-2" href={IoTChannel.url}>Click here</a></h3>
            </div>
        </>)
    )
}

export default Settings