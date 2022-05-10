import '../style/WordHeading.css';

function WordHeading({word}) {
    return (
        <div className="border-word container">
            <span>{word}</span>
        </div>        
    )
}

export default WordHeading;