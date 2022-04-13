import '../style/WordHeading.css';

function WordHeading({word}) {
    return (

        <div className="borderWord container">
            {word.map(value => {
                return <><span>{value}</span><br/></>;
            })}
        </div>
        
    )
}

export default WordHeading;