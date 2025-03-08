export default function Control({ onNext }) {
    return (
        <div className="control">
            <button onClick={onNext} className="next">
                next
            </button>
        </div>
    );
}
