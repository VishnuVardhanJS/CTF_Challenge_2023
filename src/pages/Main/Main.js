import DisplayCard from "../../components/DisplayCard/DisplayCard";
import "./Main.css"


function Main() {

    const data=[
        {
            title:"Challenge 1",
            url:"Challenge1"
        },
        {
            title:"Challenge 2",
            url:"Challenge2"
        },
        {
            title:"Challenge 3",
            url:"Challenge3"
        },
        {
            title:"Challenge 4",
            url:"Challenge4"
        },
        {
            title:"Challenge 5",
            url:"Challenge5"
        },
        {
            title:"Challenge 6",
            url:"Challenge6"
        },
    
    ]

    return ( 
        <div className="main-container">
        <DisplayCard data={data}/>
        </div>
     );
}

export default Main;