import './styles/AboutUs.css'
import Blank from './headshots/blank-profile-picture-973460_1280.webp'
import Sam from './headshots/sam_headshot.png'
import Aidan from './headshots/aidan.png'

const AboutUsPage = () => {
    return (
        <div class="aboutUsDisplay">
            <div class="aboutUsHeader">
                About Us 
            </div>
            <div class="aboutUsTextDisplayContainer">
                <div class="aboutUsTextDisplay">
                    <div class="aboutUsBodyTitle"> Our Story </div>
                    <br/>
                        <p> Sway was founded in 2022 by a group of University students 
                        who originally came together with the purpose of creating 
                        an app to complete the requirements for their class. 
                        However, with the current war between Russia and Ukraine 
                        taking place we as a collective agreed that we should aim 
                        to create something that can benefit everyone during these 
                        trying times. Sway was born to help the average person 
                        identify any political biases that may occur in the media, 
                        and upon doing research into bias filters our team noticed 
                        that there were other filters that were not easily 
                        available to the public like a gender filter.</p>
                        
                        <br/>
                        <div class="aboutUsBodyTitle"> Our Target Audience </div>
                        <br/>
                        <p>Our target audience for the Sway app is anyone receiving news
                        about the current war or politics from public outlets and want to ensure the
                        information their receiving isn’t bias in any way.</p>
                      

                        <div class="aboutUsBodyTitle"> Our Team </div>
                        <br/>

                        <div class="row">
                        <div class="column">
                            <div class="card">
                                <img src={Blank} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Chrisvin Joseph</h2>
                                    <p class="title">Project Leader</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example1@example.com</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("example1@example.com")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src={Sam} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Sam Hobson</h2>
                                    <p class="title">Backend Designer</p>
                                    <p>Hi! My name is Sam and I am about to complete a Bachelor of Computer Science, majoring in Cyber Security. I love playing games, skiing, astronomy and F1 racing. I plan on using my passion for Cyber Security to help protect computer systems in the future!</p>
                                    <p>sam.hobson2535@gmail.com</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("sam.hobson2535@gmail.com")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src={Blank} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Ethan Moore</h2>
                                    <p class="title">Backend Designer</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("example@example.com")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src={Blank} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Quoc Duong Nquyen</h2>
                                    <p class="title">Backend Designer</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("example@example.com")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src={Aidan} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Aidan Galovic</h2>
                                    <p class="title">Frontend Designer</p>
                                    <p>Hi, my name is Aidan and I am currently completing my final year of my Bachelor of Computer Science (Cyber Security) degree. I really enjoying getting outdoors and playing sports, I also love coding little games in my spare time. </p>
                                    <p>ajg378@uowmail.edu.au</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("ajg378@uowmail.edu.au")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <img src={Blank} alt="Dev" width="100%"/>
                                <div class="container">
                                    <h2>Quoc Tuan Nguyen</h2>
                                    <p class="title">Backend Designer</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>example@example.com</p>
                                    <p><button class="button" onClick={() => {navigator.clipboard.writeText("example@example.com")}}>Copy Email</button></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br/>


            
        </div>

    )
}

export default AboutUsPage;