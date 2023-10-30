type ResultsStateType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}
const Results = (props: ResultsStateType) => {
    return (
        <div>
            {props.results.country &&
                <div>
                    <p>
                        {props.results.cityName}
                    </p>
                    <p>
                        {props.results.country}
                    </p>
                    <p>
                        {props.results.conditionText}
                    </p>
                    <p>
                        {props.results.temperature}
                    </p>
                    <img src={props.results.icon} />
                </div>}
        </div>
    );
};

export default Results;