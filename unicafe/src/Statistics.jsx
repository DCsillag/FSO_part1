import Display from "./Display";

const Statistics = ({ good, neutral, bad}) => {
    
    const all = () => good+bad+neutral

    const average = () => {
        return all() ? (good-bad) / all() : 0
    }

    const positive = () => {
        return all() === 0 ? "0%" : `${(good / all() * 100).toFixed(1)}%`;
    };

    if (!all()) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <Display text="Good" value={good}/>
                    <Display text="Neutral" value={neutral}/>
                    <Display text="Bad" value={bad}/>
                    <Display text="All" value={all()}/>
                    <Display text="Average" value={average()}/>
                    <Display text="Positive" value={positive()}/>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics