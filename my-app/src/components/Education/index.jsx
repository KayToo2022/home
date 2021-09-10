import "./Education.css"

function Education() {
    return (
        <div style={{paddingTop: '20px', paddingLeft: '40px', paddingRight: '40px', paddingBottom:'20px', overflow: 'auto'}}>
            <h1>Education</h1>

            <div style={{width: '100%'}}>
                <div style={{minWidth: '50%', float: 'left'}}>
                    <p className="subheader">MS - Artificial Intelligence</p>
                    <p>San Jose State University - San Jose, CA</p>
                </div>
                <div style={{minWidth: '50%', float: 'left'}}>
                    <img alt="placeholder"></img>
                </div>
            </div>

            

        </div>
    )
}

export default Education;