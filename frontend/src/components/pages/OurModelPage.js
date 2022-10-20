import './styles/OurModel.css'
import WEKA from './aboutUsLogos/weka.png'
import PYTORCH from './aboutUsLogos/pytorch.png'
import NYCKEL from './aboutUsLogos/nyckel.png'
import BERT from './aboutUsLogos/bert.png'
import KERAS from './aboutUsLogos/keras.png'
// Lots of garbage text below to demo scrollbar.
// Replace this text with the appropriate information.

const OurModelPage = () => {
    return (
        <div className="ourModelPage">
            <div className="ourModelHeader">
                Our Model
            </div>
            <div className="ourModelTextDisplayContainer">
                <div className="ourModelTextDisplay">
                    <div class='ourModelBodyTitle'> Introduction </div>
                    <p>The process of designing, training, and utilising our model has been a challenging, 
                        thought-provoking journey that has led us to use multiple different approaches to machine learning. 
                        Furthermore, throughout this learning experience, our team tried to implement many different styles 
                        of models which all didn’t fully utilise what we were hoping for. </p>
                    <img src={KERAS} alt="Dev" class='centerAlignImage'/>
                    <p>Within the first stage of this project, we attempted to create a Political Bias classifier with the 
                        TensorFlow JS library interfacing with Keras, one of Pythons Deep Learning Algorithms. A lot of 
                        knowledge gathering took place at this stage as our team must rapidly upskill and learning how to 
                        build a Machine Learning Model from the ground up. At this stage we were only focused on building a 
                        supervised learning model, meaning the model would classify data based on a label we provided. 
                        We were able to get a political bias model to work at this stage, however the accuracy was low, being 
                        decent at predicting centralised data, but poor at predicting any data that swung to the left or right.  </p>
                    <img src={PYTORCH} alt="Dev" class='centerAlignImage'/>
                    <p>Our next approach used a different Python3 Machine Learning Library, this time utilising PyTorch. 
                        We found this library to be easier to interact with than Keras, but we had further troubles in developing our model.
                         At this stage, we tried to broaden our knowledge and tackle an unsupervised learning model which means
                          that data would be categorised not based on labels provided by us. We were able to get a Gender Bias model 
                          working at this stage, however the accuracy was subpar (being no more than 40%) accurate. </p>
                    <img src={BERT} alt="Dev" class='centerAlignImage'/>
                    <p>The BERT Natural Language Processor (NLP) was critical in helping us create our earlier models. 
                        BERT is a Library pretrained and developed, available to anyone to use for NLP.  
                        We attempted to use this library to create both the supervised and unsupervised learning models shown above. 
                        All these models worked, we felt that improvements needed to be done to increase the precision of them. </p>
                    <img src={WEKA} alt="Dev" class='centerAlignImage'/>
                    <p>For our next approach, we found Weka 3: Machine Learning Software in Java built by the University of Waikato, 
                        New Zealand, which is an online Machine Learning tool to classify datasets provided to it. 
                        There was a project, using the WEKA software called AutoWeka which was created to help people to access 
                        machine learning and classify data for them. We tried to run this program on our collected datasets and 
                        came up with models of reasonably high precision. However, as this project is written in Java and the backend 
                        of our website is written in Python, getting the 2 to work together was challenging and as such, we again abandoned 
                        this idea. </p>
                    <img src={NYCKEL} alt="Dev" class='centerAlignImage'/>
                    <p>Nyckel is an online free tool to create machine learning Ais at the click of a button. 
                        The website provides an API framework while also being a backend to host the data that we use to train our models.
                         We decided to shift our backend onto Nyckel and use a classifier we built with this tool as our machine learning model. 
                         This is an excellent solution to the problems we were having as A. The model is on a cloud server, 
                         which means that the heavy lifting of the model computations does not have to take place on a client’s computer and 
                         B. the backend has already been set up to interface with a JS frontend which our product will be using. 
                         This model ended up being about 65% accurate for both the Gender Bias and Political Bias models, which we are very happy with. </p>
                    <div class='ourModelBodyTitle'> Conclusion </div>
                    <p>Overall, this process has been a fun and engaging one, with all team members learning a great deal about Machine
                         Learning classification along the way. We are very happy with the model that we have finally created and are proud of how 
                         far we have come in our knowledge about this everchanging subject. </p>
                </div>
            </div>
            {/* <div className="linkDisplayHeader">
                Links
            </div>
            <div className="ourModelLinkDisplayContainer">
                <div className="ourModelLinkDisplay">
                    <a href='https://github.com/qtuan1401/Sway' target="_blank"> GitHub Link </a> <br></br> <br></br>
                    <a href='https://keras.io' target="_blank"> Keras Link </a> <br></br> <br></br>
                    <a href='https://pytorch.org' target="_blank"> PyTorch Link </a> <br></br> <br></br>
                    <a href='https://huggingface.co/docs/transformers/model_doc/bert' target="_blank"> BERT Link </a> <br></br> <br></br>
                    <a href='https://www.cs.waikato.ac.nz/ml/weka/' target="_blank"> WEKA Link </a> <br></br> <br></br>
                    <a href='https://www.nyckel.com' target="_blank"> Nyckel Link </a> <br></br> <br></br>
                    <a href='https://adfontesmedia.com/interactive-media-bias-chart/' target="_blank"> AdFontes Dataset </a> <br></br> <br></br>
                    <a href='https://www.kaggle.com/datasets/snapcrack/all-the-news' target="_blank"> Kaggle All The News Dataset </a> <br></br> <br></br>
                </div>
            </div> */}
        </div>
    )
}

export default OurModelPage;