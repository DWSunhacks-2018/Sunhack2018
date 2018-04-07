import React, { Component } from 'react';

class UploadImage extends Component{
    render(){
        return(
            <div>
                <button><a href={"https://api.instagram.com/oauth/authorize/?client_id=ea959e828ecf44f89e72cf794b4e2eec&redirect_uri=http://localhost:3000/&response_type=code"}>Authorize</a></button>
            </div>
        )
    }
}

export default UploadImage;
