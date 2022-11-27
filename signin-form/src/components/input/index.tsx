import "./style.css";
type PropsType = {
    name: string,
    type?: string,
    label: string,
};
const Input = ({name, label, type}: PropsType) => {
    return <div className="input">
        <label htmlFor={name}>{label}</label>
        <input name={name} id={name} type={type ?? "text"} placeholder={label} />
    </div>
}
export default Input;