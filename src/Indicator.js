export default function Indicator({ step, length }) {
    return (
        <h4 className="indicator">
            Question <span style={{ color: "red" }}> {step + 1} </span>of{" "}
            {length}
        </h4>
    );
}
