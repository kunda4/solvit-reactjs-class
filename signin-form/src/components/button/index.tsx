import "./style.css";
type Props ={
    label: string,
}
const Button=({label}: Props)=>{
    return <button className="login-button">{label}</button> 
}
export default Button;

