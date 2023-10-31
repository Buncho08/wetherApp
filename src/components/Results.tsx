type ResultsStateType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}
const Results = ({ results }: ResultsStateType) => {
    const {
        country,
        cityName,
        temperature,
        conditionText,
        icon
    } = results;

    return (
        <div>
            {country &&
                <div>
                    <p>
                        {cityName}
                    </p>
                    <p>
                        {country}
                    </p>
                    <p>
                        {conditionText}
                    </p>
                    <p>
                        {temperature}
                    </p>
                    <img src={icon} />
                </div>}
        </div>
    );
};

export default Results;