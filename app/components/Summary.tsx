import React from 'react'
import ScoreGauge from './ScoreGauge'
import ScoreBadge from './ScoreBadge';

const Summary = ({feedback}: {feedback:Feedback}) => {

    const Category = ({title, score}: {title:string, score: number}) => {
        const textColor = score > 70 ? 'text-green-600'
            :score > 49
            ? 'text-yllow-600' : 'text-red-600';

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
    const overallScore = feedback?.overallScore ?? 0;
    const toneScore = feedback?.toneAndStyle?.score ?? 0;
    const contentScore = feedback?.content?.score ?? 0;
    const structureScore = feedback?.structure?.score ?? 0;
    const skillsScore = feedback?.skills?.score ?? 0;
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