import './styles/ResultsPage.css'
import React, { useState, useEffect } from 'react'

import BiasDisplay from '../BiasDisplay'
import BiasOverall from '../BiasOverall'

const ResultsPage = ({one, two, three, overall}) => {
    const [politicalCard, setPoliticalCard] = useState(one)
    const [genderCard, setGenderCard] = useState(two)
    const [qualityCard, setQualityCard] = useState(three)

    useEffect(() => {
        setPoliticalCard(one)
        setGenderCard(two)
        setQualityCard(three)
        setOverallCard(overall)
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
                <BiasOverall header={overallCard.header} description={overallCard.description} percent={overallCard.percent}/>
            </div>
        </div>
    )
}

export default ResultsPage;