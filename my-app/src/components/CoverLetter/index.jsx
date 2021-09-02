import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Form, Button} from 'react-bootstrap'

import "./CoverLetter.css"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

function CoverLetter() {

    const[formPortion, incrementForm] = useState(0);

    const [name, setName] = useState('*your name*')
    const [phone, setPhone] = useState('*your phone*')
    const [email, setEmail] = useState('*your email*')

    const [HM, setHM] = useState('Hiring Manager');
    const [jobTitle, setJobTitle] = useState('*job title*')
    const [org, setOrg] = useState('*company name*')
    const [field, setField] = useState('*job industry*')
    const [motivation, setMotivation] = useState('*why you want this job*')

    const [skills, setSkills] = useState('*skills*');
    const [inputSkills, setInputSkills] = useState('*skills')
    const [achievments, setAchievments] = useState(['*achievment*']);
    const [inputAchievments, setInputAchievments] = useState('*achievment*');

    const [showLetter, toggleShow] = useState(true);
    const [knowsHM, toggleKHM] = useState(false);

    const getInfoModal = () => {
        if (!showLetter) {
            if (getWindowDimensions().width < 800) {
                return (
                    <div style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100vw', height: '100vh', zIndex: '99', position: 'absolute', top: '0', left: '0'}} onClick={()=>{toggleShow(true)}}>
                        <div style={{backgroundColor: 'white', overflow: 'auto', position: 'absolute', top: '10%', left: '10%', width: '80%', height:'80%', zIndex: '100', opacity: '100%'}}>
                            <Form style={{margin: '5%'}}>
                                <p style={{fontSize: 'larger'}}>Fill out this form to get started</p>
                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="formsubhead">Who are you?</Form.Label>
                                    <br/>
                                    <Form.Label className="formlabel">Name</Form.Label>
                                    <Form.Control defaultValue={name} className="forminput"  className="forminput" placeholder="Enter name" id="name"/>
                                    <br/>
                                    <Form.Label className="formlabel">Email</Form.Label>
                                    <Form.Control defaultValue={email} className="forminput"  type="email" placeholder="Enter email" id="email"/>
                                    <br/>
                                    <Form.Label className="formlabel">Phone #</Form.Label>
                                    <Form.Control defaultValue={phone} className="forminput"  placeholder="Enter phone number" id="phone"/>
                                </Form.Group>
    
                                <br/>
    
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="formsubhead">What are you applying for?</Form.Label>
                                    <br/>
                                    <Form.Label className="formlabel">Job title</Form.Label>
                                    <Form.Control defaultValue={jobTitle} className="forminput"  placeholder="Enter job title" id="title"/>
                                    <br/>
                                    <Form.Label className="formlabel">Company</Form.Label>
                                    <Form.Control defaultValue={org} className="forminput"  type="email" placeholder="Enter company name" id="org"/>
                                    <br/>
                                    <Form.Label className="formlabel">Job field</Form.Label>
                                    <Form.Control defaultValue={field} className="forminput"  placeholder="Enter job field" id="field"/>
                                </Form.Group>
    
                                <br/>
    
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="formsubhead">What skills are they looking for?</Form.Label>
                                    
                                    <br/>
                                    <Form.Label className="formlabellarge">Skills (separate skills with a comma)</Form.Label>
                                    <Form.Control defaultValue={inputSkills} className="forminputlarge"  as="textarea" placeholder="Enter skills" rows={3} id="skills"/>
                                    <br/>
                                </Form.Group>
    
                                
    
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="formsubhead">Why do you want to work here?</Form.Label>
                                    <br/>
                                    <Form.Label className="formlabellarge">Reason</Form.Label>
                                    
                                    <Form.Control defaultValue={motivation} className="forminputlarge"  as="textarea" placeholder="Enter motivation" rows={3} id="motivation"/>
                                    <br/>
                                    
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="formsubhead">List some achievments relating to the job</Form.Label>
                                    <br/>
                                    <Form.Label className="formlabellarge">Achievments (put each achievment on a new line)</Form.Label>
                                        <Form.Control defaultValue={inputAchievments} className="forminputlarge"  as="textarea" placeholder="Enter achievments" rows={3} id="achievments"/>
                                    <br/>
                                    
                                </Form.Group>
                                
                                <Button variant="primary" onClick={() => {handleClick()}}>
                                    Submit
                                </Button>
                                <button style={{marginLeft: '15px'}} onClick={()=>{toggleShow(true)}}>Cancel</button>
                            </Form>
                            
                        </div>
                    </div>
                )
            }
            return (
                <div style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100vw', height: '100vh', zIndex: '99', position: 'absolute', top: '0', left: '0'}} onClick={()=>{toggleShow(true)}}>
                    <div style={{backgroundColor: 'white', overflow: 'auto', position: 'absolute', top: '10%', left: '30%', width: '40%', height:'80%', zIndex: '100', opacity: '100%'}}>
                        <Form style={{margin: '5%'}}>
                            <p style={{fontSize: 'larger'}}>Fill out this form to get started</p>
                            
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="formsubhead">Who are you?</Form.Label>
                                <br/>
                                <Form.Label className="formlabel">Name</Form.Label>
                                <Form.Control defaultValue={name} className="forminput"  className="forminput" placeholder="Enter name" id="name"/>
                                <br/>
                                <Form.Label className="formlabel">Email</Form.Label>
                                <Form.Control defaultValue={email} className="forminput"  type="email" placeholder="Enter email" id="email"/>
                                <br/>
                                <Form.Label className="formlabel">Phone #</Form.Label>
                                <Form.Control defaultValue={phone} className="forminput"  placeholder="Enter phone number" id="phone"/>
                            </Form.Group>

                            <br/>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="formsubhead">What are you applying for?</Form.Label>
                                <br/>
                                <Form.Label className="formlabel">Job title</Form.Label>
                                <Form.Control defaultValue={jobTitle} className="forminput"  placeholder="Enter job title" id="title"/>
                                <br/>
                                <Form.Label className="formlabel">Company</Form.Label>
                                <Form.Control defaultValue={org} className="forminput"  type="email" placeholder="Enter company name" id="org"/>
                                <br/>
                                <Form.Label className="formlabel">Job field</Form.Label>
                                <Form.Control defaultValue={field} className="forminput"  placeholder="Enter job field" id="field"/>
                            </Form.Group>

                            <br/>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="formsubhead">What skills are they looking for?</Form.Label>
                                
                                <br/>
                                <Form.Label className="formlabellarge">Skills (separate skills with a comma)</Form.Label>
                                <Form.Control defaultValue={inputSkills} className="forminputlarge"  as="textarea" placeholder="Enter skills" rows={3} id="skills"/>
                                <br/>
                            </Form.Group>

                            

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="formsubhead">Why do you want to work here?</Form.Label>
                                <br/>
                                <Form.Label className="formlabellarge">Reason</Form.Label>
                                
                                <Form.Control defaultValue={motivation} className="forminputlarge"  as="textarea" placeholder="Enter motivation" rows={3} id="motivation"/>
                                <br/>
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="formsubhead">List some achievments relating to the job</Form.Label>
                                <br/>
                                <Form.Label className="formlabellarge">Achievments (put each achievment on a new line)</Form.Label>
                                    <Form.Control defaultValue={inputAchievments} className="forminputlarge"  as="textarea" placeholder="Enter achievments" rows={3} id="achievments"/>
                                <br/>
                                
                            </Form.Group>
                            
                            <Button variant="primary" onClick={() => {handleClick()}}>
                                Submit
                            </Button>
                            <button style={{marginLeft: '15px'}} onClick={()=>{toggleShow(true)}}>Cancel</button>
                        </Form>
                        
                    </div>
                </div>
            )
        }
    }

    const handleClick = () => {
        setName(document.getElementById("name").value)
        setPhone(document.getElementById("phone").value)
        setEmail(document.getElementById("email").value)

        setJobTitle(document.getElementById("title").value)
        setOrg(document.getElementById("org").value)
        setField(document.getElementById("field").value)
        setMotivation(document.getElementById("motivation").value)

        setInputSkills(document.getElementById('skills').value)
        var tempSkills = document.getElementById('skills').value
        var lastCommaindex = tempSkills.lastIndexOf(',')
        if (lastCommaindex != -1) {
            tempSkills = tempSkills.slice(0, lastCommaindex) + ", and" + tempSkills.slice(lastCommaindex+1, tempSkills.length)
        }
        setSkills(tempSkills)

        setInputAchievments(document.getElementById("achievments").value)
        var tempAchievments = document.getElementById("achievments").value.split('\n')
        setAchievments(tempAchievments)

        toggleShow(true)
    }

    const exportContent = (element, filename = '') => {
        console.log('exporting')
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
 
        var footer = "</body></html>";
    
        var html = header+document.getElementById(element).innerHTML+footer;
    
        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        
        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        
        // Specify file name
        filename = name && org?name+' '+org+' Cover Letter.docx':'Cover Letter.docx';
        
        // Create download link element
        var downloadLink = document.createElement("a");
    
        document.body.appendChild(downloadLink);
        
        if(navigator.msSaveOrOpenBlob ){
            navigator.msSaveOrOpenBlob(blob, filename);
        }else{
            // Create a link to the file
            downloadLink.href = url;
            
            // Setting the file name
            downloadLink.download = filename;
            
            //triggering the function
            downloadLink.click();
        }
        
        document.body.removeChild(downloadLink);
    }

    return(
        <div style={{margin: '40px', overflow: 'auto', paddingBottom: '40px'}}>
            {getInfoModal()}
            <h1>Cover Letter Template</h1>
            <p>
                Do you hate writing cover letters? I know I do. That's why I made this tool to help me write cover letters
                so I don't have to. Just enter the details of the job in the form below and the site will fill the template
                for you. You can then copy the letter or export the letter as a word doc.
            </p>

            <button onClick={()=>{toggleShow(false)}} style={{marginRight: '20px', marginBottom: '10px'}}>Fill out form</button>

            <button onClick={() => {exportContent('exportContent')}} >Export as .doc</button>

            <div id="exportContent" style={{width: '96%', border: 'solid', padding: '1%', marginTop: '20px', boxShadow: '10px 5px 5px gray'}}>
                <p>Dear {HM},</p>
                <p>
                    I’m excited to apply for the {jobTitle} position at {org}. 
                    Although I’m an entry-level applicant, I am passionate about doing a great 
                    job and out of the skills you’re looking for I have already developed {skills}.
                </p>

                <p>
                    I’m very interested in beginning a career in the {field} field,   
                    as {motivation}. I believe I’ll make an excellent {jobTitle} thanks to my skills, plus the following accomplishments:
                </p>

                <ul>
                    {achievments.map((ach) => (
                        <li>
                            {ach}
                        </li>
                    ),)}
                    
                </ul>

                <p>
                    I’m excited to show you how my {skills} can help you achieve your 
                    upcoming goals. Could we set up a time to discuss your needs?
                </p>

                <p>
                    Best Regards,
                </p>

                <p>
                    {name}
                </p>
                <p>
                    {phone}
                </p>
                <p>
                    {email}
                </p>
            </div>

            
        </div>
        
    )
}

export default CoverLetter