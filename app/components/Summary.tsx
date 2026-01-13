
import ScoreGauge from './ScoreGauge'
import ScoreBadge from './ScoreBadge';

const Summary = ({feedback}: {feedback:Feedback}) => {
    // console.log("SUMMARY feedback:", feedback);

    const Category = ({title, score}: {title:string, score: number}) => {
        const textColor = score > 70 
            ? 'text-green-600'
            : score > 49
            ? 'text-yellow-600' 
            : 'text-red-600';

        return(
            <div className='resume-summary'>
                <div className='category'>
                    <div className='flex flex-row gap-2 items-center justify-center'>
                        <p className='text-2xl'>{title}</p>
                        <ScoreBadge score={score} />
                    </div>
                    <p className='text-2xl'>
                        <span className={textColor}>{score}</span>/100
                    </p>
                </div>
                
            </div>
        );
    };
    const overallScore = Math.round((feedback?.overall_rating ?? 0) * 10);

const toneScore = (feedback?.detailed_analysis?.relevance_to_job ?? 0) * 10;
const contentScore = (feedback?.detailed_analysis?.content_quality ?? 0) * 10;
const structureScore = (feedback?.detailed_analysis?.formatting ?? 0) * 10;
const skillsScore = (feedback?.detailed_analysis?.keyword_optimization ?? 0) * 10;

    return (
        <div className='bg-white rounded-2xl shadow-md w-full'>
            <div className='flex flex-row items-center p-4 gap-8'>
                <ScoreGauge score={overallScore} />

                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>Your Resume Score</h2>
                    <p className='text-sm text-gray-500'>
                        This sore is calculated based on the variable listed below.
                    </p>
                </div>
            </div>

            <Category title='Tone & Style' score={toneScore}/>
            <Category title='Content' score={contentScore}/>
            <Category title='Structure' score={structureScore}/>
            <Category title='Skills' score={skillsScore}/>

        </div>
    )
}

export default Summary