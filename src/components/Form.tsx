type FormPropsType = {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
    flgs: string;
}

// 渡されたprops↑

const Form = (props: FormPropsType) => {
    // ここにあったAPIはApp.tsxに行きました
    let flg: number = 1; if (props.flgs) {
        flg = 0;
    }
    if (props.flgs !== "") {
        flg = 0;
    }

    if (flg) {
        return (
            <div className="form">
                <form onSubmit={props.getWeather}>
                    {/* 入力するとリアルタイムで入る
                {city} */}
                    <input type="text" name="city" placeholder="" onChange={e => props.setCity(e.target.value)} />
                    {/* onchangeハンドラ、イベントが発火したらsetCityに値を渡す */}
                    {/* e.target.value で入力された値が取り出せる -> 自動的にStringに変換される*/}
                    {/* setCity -> cityというわたり方 */}
                    <br />

                    <button type="submit" className="submit">送信</button>
                    {/* getWeatherを呼び出してあっちに移る */}
                </form>
            </div>
        );
    }
    else {
        return (
            <div className="afterForm">
            </div>
        );
    }
};

export default Form;