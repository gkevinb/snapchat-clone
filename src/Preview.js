import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectCameraImage } from './features/cameraSlice'
import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectCameraImage)
    const history = useHistory()

    useEffect(() => {
        if (!cameraImage){ /* redirect to / if preview page does not have camera image */
            history.replace('/')
        }
    }, [cameraImage, history])

    return (
        <div className="preview">
            <h1>This is your preview!</h1>
            <img src={cameraImage} alt="" />
        </div>
    )
}

export default Preview
