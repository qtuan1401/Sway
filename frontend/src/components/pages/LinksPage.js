import './styles/Links.css'

const LinksPage = () => {
    return (
        <div className="ourLinksPage">
            <div className="ourLinksHeader1">
                Repository Link
            </div>
            <div className="ourLinksTextDisplayContainer1">
                <div className="ourLinksDisplay1">
                    <a href='https://github.com/qtuan1401/Sway' target="_blank" rel="noreferrer" class='ourLinksLink'> GitHub Link </a> <p> A link to the GitHub Repository for the project</p> <br></br> <br></br>
                </div>
            </div>
            <div className="ourLinksHeader2">
                Machine Learning Links
            </div>
            <div className="ourLinksTextDisplayContainer2">
                <div className="ourLinksDisplay2">
                    <a href='https://keras.io' target="_blank" rel="noreferrer" class='ourLinksLink'> Keras Link </a> <p> A link to the Keras Python Library used for the inital machine learning model </p><br></br> <br></br>                     <a href='https://pytorch.org' target="_blank" rel="noreferrer" class='ourLinksLink'> PyTorch Link </a> <p> A link to PyTorch, the python library used to build the second concept model </p><br></br> <br></br>
                    <a href='https://huggingface.co/docs/transformers/model_doc/bert' target="_blank" rel="noreferrer" class='ourLinksLink'> BERT Link </a> <p> A link to BERT (Bidirectional Encoder Representations from Transformers) used as a classifier for our original models </p><br></br> <br></br>
                    <a href='https://www.cs.waikato.ac.nz/ml/weka/' target="_blank" rel="noreferrer" class='ourLinksLink'> WEKA Link </a> <p> A link to the University of Waikato New Zealand Machine Learning Classifier tool used to make one of our models </p><br></br> <br></br>
                    <a href='https://www.nyckel.com' target="_blank" rel="noreferrer" class='ourLinksLink'> Nyckel Link </a> <p> A link to the website Nyckel, used to host our data and provide the API for querying our model </p> <br></br> <br></br>
                </div>
            </div>
            <div className="ourLinksHeader3">
                Database Links
            </div>
            <div className="ourLinksTextDisplayContainer3">
                <div className="ourLinksDisplay3">
                    <a href='https://adfontesmedia.com/interactive-media-bias-chart/' target="_blank" rel="noreferrer" class='ourLinksLink'> AdFontes Dataset </a> <p> A link to the dataset used to train the Political Bias and Quality Model </p><br></br> <br></br>
                    <a href='https://www.kaggle.com/datasets/snapcrack/all-the-news' target="_blank" rel="noreferrer" class='ourLinksLink'> Kaggle All The News Dataset </a> <p>A link to the Kaggle All the News dataset used to train the Gender Bias Model </p> <br></br> <br></br>
                </div>
            </div>
        </div>
    )
}

export default LinksPage;