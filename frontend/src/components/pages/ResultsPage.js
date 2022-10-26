import './styles/ResultsPage.css'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import BiasDisplay from '../BiasDisplay'
import BiasOverall from '../BiasOverall'

const ResultsPage = () => {
    const location = useLocation();
    const { one, two, three, overall } = location.state;

    const [politicalCard, setPoliticalCard] = useState(one)
    const [genderCard, setGenderCard] = useState(two)
    const [qualityCard, setQualityCard] = useState(three)
    const [overallPercent, setOverallPercent] = useState(0);

    useEffect(() => {
        setPoliticalCard(one)
        setGenderCard(two)
        setQualityCard(three)

        let tempPoliticalVal;
        let tempGenderVal;
        let tempQualityVal;
        let temp;
        const politicalConfidence = one.confidence;
        const genderConfidence = two.confidence;
        const qualityConfidence = three.confidence;
        const politicalData = one.value;
        const qualityData = three.value;
        // The purpose of the calculation below is to ensure that any swing towards either side of the bar
        // will negatively influence the overall.
        if(politicalData == 1 || politicalData == -1) {
            tempPoliticalVal = 50 + (50 * politicalConfidence)
        } else if(politicalData == 0) {
            tempPoliticalVal = 50 - (50 * politicalConfidence)
        }

        // The purpose of the calculation below is to ensure that any swing towards either side of the bar
        // will negatively influence the overall.
        tempGenderVal = 100 * genderConfidence
        
        // The purpose of the calculation below for effective data reliability/quality is to
        // use this value as a weight while calculating the overall.
        if(qualityData == 1) {
            tempQualityVal = 50 + (50 * qualityConfidence)
        } else if(qualityData == 0) {
            tempQualityVal = 50
        } else if(qualityData == -1) {
            tempQualityVal = 50 - (50 * qualityConfidence)
        }
        temp = ((tempPoliticalVal + tempGenderVal) * (tempQualityVal / 100)) / 200
        setOverallPercent(Math.round(temp*100))
    }, [one, two, three])

    return (
        <div className="resultsPage">
            <div className="resultsPageHeader">
                Identified biases:
            </div>
            <div className="resultsDisplayStack">
                <div className="resultOne">
                    <BiasDisplay
                        header={politicalCard.header}
                        description={politicalCard.description}
                        leftLabel={politicalCard.leftLabel}
                        rightLabel={politicalCard.rightLabel}
                        value={politicalCard.value}
                        confidence={politicalCard.confidence}
                    />
                </div>
                <div className="resultTwo">
                    <BiasDisplay
                        header={genderCard.header}
                        description={genderCard.description}
                        leftLabel={genderCard.leftLabel}
                        rightLabel={genderCard.rightLabel}
                        value={genderCard.value}
                        confidence={genderCard.confidence}
                        rightLabelOffset={genderCard.rightLabelOffset}
                    />
                </div>
                <div className="resultThree">
                    <BiasDisplay 
                        header={qualityCard.header}
                        description={qualityCard.description}
                        leftLabel={qualityCard.leftLabel}
                        rightLabel={qualityCard.rightLabel}
                        value={qualityCard.value}
                        confidence={qualityCard.confidence}
                    />
                </div>
            </div>
            <div className="overallResultPanel">
                <BiasOverall header={overall.header} description={overall.description} percent={overallPercent}/>
            </div>
        </div>
    )
}

export default ResultsPage;