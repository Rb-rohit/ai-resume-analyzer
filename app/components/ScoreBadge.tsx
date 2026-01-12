import React from 'react'

interface ScoreBadge {
    score : number;
}

const ScoreBadge = ({score}) => {
    let badgeColor = '';
    let badgeText = '';

    if (score > 70){
        badgeColor = 'bg-badge-green text-green-600';
        badgeText = 'Good Start';
    } else if (score > 49) {
        badgeColor = 'bg-badge-yellow text-yellow-600';
        badgeText = 'Need Work';
    }else {
        badgeColor = 'bg-badge-red text-red-600';
        badgeText = 'Need Work';
    }
    return (
        <div className= {`px-3 py-1 rounded-full ${badgeColor}`}>
            <p className='text-sm font-medium'>{badgeText}</p>
        </div>
    );
};

export default ScoreBadge;