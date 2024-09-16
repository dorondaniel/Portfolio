import React from "react";
import './About.css';

const About = () => {

    return ( 
        
        <div className="About">
            <div className="Content">
                <h4>aboutMe.py</h4>
                <div className="Hollow">
                    
                    <div className="Code">
                        <p><span id="keyword">class </span>DoronDaniel:<br/>
                        &emsp;&emsp;<span id="keyword">def </span><span id="func">__init__</span>(self):<br/>
                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">self</span>.name=<span id="value">"Doron N C Daniel"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">self</span>.qualification=<span id="value">"B.E Computer Science and </span>&emsp;&emsp;&emsp;&emsp;<span id="value"> Engineering"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">self</span>.gender=<span id="value">"Male"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">self</span>.ph_number=<span id="value">"+91-9940441675"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">self</span>.email=<span id="value">"idorondaniel@gmail.com"</span><br/><br/>

                        &emsp;&emsp;<span id="keyword">def </span><span id="func">Education</span>(self):<br/>
                        &emsp;&emsp;&emsp;&emsp;college = <span id="value">"Rajalakshmi Institute of Technology"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;joining_year = <span id="int">2020</span><br/>
                        &emsp;&emsp;&emsp;&emsp;graduating_year = <span id="int">2024</span><br/><br/>

                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">print</span>&#40;<span id="value">f"</span>&#123;<span id="keyword">self.</span>qualification&#125;,
                        &#123;college&#125;,<span id="value">From: </span><br/>&emsp;&emsp;&emsp;&emsp;&#123;joining_year&#125;,<span id="value">
                        To: </span>&#123;graduating_year&#125;<span id="value">"</span>&#41;<br/><br/>

                        &emsp;&emsp;<span id="keyword">def </span><span id="func">Skills</span>(self):<br/>
                        &emsp;&emsp;&emsp;&emsp;key_skills = &#91;<span id="value">"Python"<span id="symbol">,</span>"Java"<span id="symbol">,</span>
                        "Android App Development"<span id="symbol">,</span><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        "Ethical Hacking"<span id="symbol">,</span>"C Programming"<span id="symbol">,</span>"Kotlin"</span>&#93;<br/><br/>

                        &emsp;&emsp;&emsp;&emsp;soft_skills = &#91;<span id="value">"Time Management"<span id="symbol">,</span>"Logical<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        Reasoning"<span id="symbol">,</span>
                        "Adaptablity"</span>&#93;<br/><br/>

                        &emsp;&emsp;&emsp;&emsp;&#91;<span id="keyword">print</span>&#40;i&#41;<span id="keyword"> for</span> i<span id="func"> in
                         key_skills</span>&#93;<br/><br/>

                        &emsp;&emsp;&emsp;&emsp;&#91;<span id="keyword">print</span>&#40;i&#41;<span id="keyword"> for</span> i<span id="func"> in
                        soft_skills</span>&#93;<br/><br/>

                        &emsp;&emsp;<span id="keyword">def </span><span id="func">Projects</span>(self):<br/>
                        &emsp;&emsp;&emsp;&emsp;proj_1_name = <span id="value">"Mobile Computational Offloading using 
                        <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Machine Learning Techniques"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;from = <span id="value">"Jan 2024"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;to = <span id="value">"Apr 2024"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;link = <span id="value">"https://github.com/dorondaniel/BRING-OFF"</span><br/><br/>

                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">print</span>&#40;<span id="value">f"</span>&#123;proj_name&#125;, <span id="value">From: </span>&#123;from&#125;, <span id="value">To: </span>&#123;to&#125;, &#123;link&#125;<span id="value">"</span>&#41;<br/><br/>

                        &emsp;&emsp;&emsp;&emsp;proj_2_name = <span id="value">"Muscle Cramp Detection ML Model"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;from = <span id="value">"Aug 2023"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;to = <span id="value">"Dec 2023"</span><br/>
                        &emsp;&emsp;&emsp;&emsp;link = <span id="value">"https://github.com/dorondaniel/
                        <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;MUSCLE_CRAMP_DETECTION_ML_MODEL"</span><br/><br/>

                        &emsp;&emsp;&emsp;&emsp;<span id="keyword">print</span>&#40;<span id="value">f"</span>&#123;proj_name&#125;, <span id="value">From: </span>&#123;from&#125;, <span id="value">To: </span>&#123;to&#125;, &#123;link&#125;<span id="value">"</span>&#41;<br/><br/>


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;
