export default function Dicebox(props) {
    console.log(props.randomNum);
    return (
        <p class="dieface">{props.randomNum}</p>
    );
}