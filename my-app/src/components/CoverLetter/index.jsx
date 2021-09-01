import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import "./CoverLetter.css"

function CoverLetter() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [HM, setHM] = useState('');
    const [jobTitle, setJobTitle] = useState('')
    const [org, setOrg] = useState('')
    const [field, setField] = useState('')
    const [motivation, setMotivation] = useState('')

    const [achievments, setAchievments] = useState([]);

    const [showLetter, toggleShow] = useState(false);

    const getInfoModal = () => {
        if (!showLetter) {
            return (
                <div style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100vw', height: '100vh', zIndex: '99', position: 'absolute', top: '0', left: '300px'}}>
                    <div style={{backgroundColor: 'white', overflow: 'auto', position: 'absolute', top: '50px', left: '50px', width: '300px', zIndex: '100', opacity: '100%'}}>
                        
                        <div onClick={()=>{toggleShow(true)}}>toggle</div>
                    </div>
                </div>
            )
        }
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
        filename = filename?filename+'.docx':'document.docx';
        
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
        <div style={{margin: '40px', overflow: 'auto'}}>
            {getInfoModal()}
            <div id="exportContent">
                <p>Dear Hiring Manager</p>
                <p>
                    I’m excited to apply for the [Job Title] position at [Organization Name]. 
                    Although I’m an entry-level applicant, I am passionate about doing a great 
                    job and out of the skills you’re looking for I have already developed 
                    [Skill #1, Skill #2, Skill #3].
                </p>

                <p>
                    I’m very interested in beginning a career in the [Career Field] field, as I 
                    [Something That Motivates You to Join In]. I believe I’ll make an excellent 
                    [Job Title] thanks to my skills, plus the following accomplishments:
                </p>

                <ul>
                    <li>
                        [Achievement #1 that Used a Skill they Need]
                    </li>
                    <li>
                        [Achievement #2 that Used a Skill they Need]
                    </li>
                    <li>
                        [Achievement #3 that Used a Skill they Need]
                    </li>
                </ul>

                <p>
                    I’m excited to show you how my [2 Skills They Need] can help you achieve your 
                    upcoming goals. Could we set up a time to discuss your needs?
                </p>

                <p>
                    Best Regards,
                </p>

                <p>
                    [Name]
                </p>
                <p>
                    [Phone Num]
                </p>
                <p>
                    [Email]
                </p>
            </div>

            <div onClick={()=>{toggleShow(false)}}>toggle</div>

            <button onClick={() => {exportContent('exportContent')}}>Export as .doc</button>
        </div>
        
    )
}

export default CoverLetter