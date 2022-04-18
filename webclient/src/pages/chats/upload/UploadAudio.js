import { useRef, useState } from "react";
import Mic from "../icons/Mic";

function UploadAudio(){
    const[audio,setAudio] = useState(null);
    const target = useRef(null);

    const HandelUpload = (e) => {
        const uploaded = e.target.files[0];
        setAudio(URL.createObjectURL(uploaded));
    }

    return(
        <div className="upladeAudio">
        <button type="button" className="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#uploadAudio">
            <Mic /> Audio
        </button>

        <div className="modal fade" id="uploadAudio" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Upload Audio</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group row">
                            <div className="col-sm-12">
                                {/* errors here */}
                            </div>
                            <div className="col-sm-12">
                                <label htmlFor="audio" className="btn btn-primary"><Mic/> Record Audio</label>
                                <input type="file" id="audio" ref={target} onChange={(e)=>HandelUpload(e)}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UploadAudio;