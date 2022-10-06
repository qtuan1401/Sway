import './styles/AboutUs.css'
import Blank from './headshots/blank-profile-picture-973460_1280.webp'
const AboutUsPage = () => {
    return (
        <div className="tempPlaceholder">
            <h1>About Us Page</h1>

            <br/>
            <h2>Our Story</h2>

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

            <h2>Our Target Audience</h2>

            <p>Our target audience for the Sway app is anyone receiving news
                 about the current war or politics from public outlets and want to ensure the
                 information their receiving isn’t bias in any way.</p>


            <br/>

            <h2>Our Team</h2>



        
        <div class="row">
         <div class="column">
            <div class="card">
                <img src={Blank} alt="Dev" width="100%"/>
                <div class="container">
                <h2>Chrisvin Joseph</h2>
                <p class="title">Project Leader &amp; Frontend Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <img src={Blank} alt="Dev" width="100%"/>
                <div class="container">
                <h2>Sam Hobson</h2>
                <p class="title">Backend Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button class="button">Contact</button></p>
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
                <p><button class="button">Contact</button></p>
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
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <img src={Blank} alt="Dev" width="100%"/>
                <div class="container">
                <h2>Aidan Galovic</h2>
                <p class="title">Frontend Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button class="button">Contact</button></p>
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
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>
        </div>
        </div>

    )
}

export default AboutUsPage;