import Button from "./Button";

export default function Options({ options, selectOPt, setOpt, isCorrect }) {
    function handleSelect(selectedOption) {
        if (isCorrect === null) {
            setOpt(selectedOption);
        }
    }

    return (
        <>
            {options.map((option) => (
                <Button
                    onClick={() => handleSelect(option)}
                    className={
                        selectOPt === option
                            ? isCorrect === true
                                ? "correct"
                                : isCorrect === false
                                ? "wrong"
                                : "selected"
                            : ""
                    }
                    key={option}
                >
                    {option}
                </Button>
            ))}
        </>
    );
}
