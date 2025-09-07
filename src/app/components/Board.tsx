import Box from "./Box";

export default function Board(){
    return (
        <div className="board">
            <div className="row">
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="row">
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="row">
                <Box/>
                <Box/>
                <Box/>
            </div>
            

        </div>
       

    );
}