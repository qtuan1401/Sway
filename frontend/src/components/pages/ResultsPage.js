import './styles/ResultsPage.css'

import BiasDisplay from '../BiasDisplay'
import BiasOverall from '../BiasOverall'

const ResultsPage = ({one, two, three, overall}) => {
    return (
        <div className="resultsPage">
            <div className="resultsPageHeader">
                Identified biases:
            </div>
            <div className="resultsDisplayStack">
                <div className="resultOne">
                    <BiasDisplay 
                        header={one.header} 
                        description={one.description} 
                        leftLabel={one.leftLabel} 
                        rightLabel={one.rightLabel} 
                        barPercent={one.barPercent}
                    />
                </div>
                <div className="resultTwo">
                    <BiasDisplay 
                        header={two.header} 
                        description={two.description} 
                        leftLabel={two.leftLabel} 
                        rightLabel={two.rightLabel} 
                        barPercent={two.barPercent}
                    />
                </div>
                <div className="resultThree">
                    <BiasDisplay 
                        header={three.header} 
                        description={three.description} 
                        leftLabel={three.leftLabel} 
                        rightLabel={three.rightLabel} 
                        barPercent={three.barPercent}
                    />
                </div>
            </div>
            <div className="overallResultPanel">
                <BiasOverall header={overall.header} description={overall.description} percent={overall.percent}/>
            </div>
        </div>
    )
}

export default ResultsPage;