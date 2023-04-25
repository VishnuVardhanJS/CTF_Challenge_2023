import DisplayCard from "../../components/DisplayCard/DisplayCard";
import "./Main.css"


function Main() {

    const data=[
        {
            title:"Challenge 1",
            url:"/ctf/Challenge1"
        },
        {
            title:"Challenge 2",
            url:"/ctf/Challenge2"
        },
        {
            title:"Challenge 3",
            url:"/ctf/Challenge3"
        },
        {
            title:"Challenge 4",
            url:"/ctf/Challenge4"
        },
        {
            title:"Challenge 5",
            url:"/ctf/Challenge5"
        },
        {
            title:"Challenge 6",
            url:"/ctf/Challenge6"
        },
        {
            title:"Evaluate Scores",
            url:"/ctf/Evaluate"
        },
    
    ]

    return ( 
        <div className="main-container">
        <DisplayCard data={data}/>
        </div>
     );
}

export default Main;