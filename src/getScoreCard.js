function scorecard(obj){
    if(obj.scorecard){
        for(let inns in obj.scorecard){
            if(obj.scorecard[inns].pp){
                delete obj.scorecard[inns].pp;
            }
            if(obj.scorecard[inns].batsman){
                for(let bat in obj.scorecard[inns].batsman){
                    let batter = obj.scorecard[inns].batsman[bat];
                    if(!batter.hasOwnProperty("outDec")){
                        batter["sixes"] = " ";
                        batter["fours"] = " ";
                        batter["strkRate"] = " ";
                        batter["runs"] = " ";
                        batter["balls"] = " ";
                    }
                    else{
                        if(!batter.hasOwnProperty("sixes")){
                            batter["sixes"] = 0;
                        }
                        if(!batter.hasOwnProperty("fours")){
                            batter["fours"] = 0;
                        }
                        if(!batter.hasOwnProperty("runs")){
                            batter["runs"] = 0;
                        }
                        if(!batter.hasOwnProperty("balls")){
                            batter["balls"] = 0;
                        }
                        if(!batter.hasOwnProperty("strkRate")){
                            batter["strkRate"] = 0;
                        }
                    }
                }
            }
            if(obj.scorecard[inns].bowler){
                for(let ball in obj.scorecard[inns].bowler){
                    let bowl = obj.scorecard[inns].bowler[ball];
                    if(!bowl.hasOwnProperty("maidens")){
                        bowl["maidens"] = 0;
                    }
                    if(!bowl.hasOwnProperty("wickets")){
                        bowl["wickets"] = 0;
                    }
                    if(!bowl.hasOwnProperty("economy")){
                        bowl["economy"] = 0;
                    }
                }
            }
        }
    }
    if(obj.appIndex){
        delete obj.appIndex;
    }
    if(obj.responseLastUpdated){
        delete obj.responseLastUpdated;
    }
    return obj;
}

function BatsmanTable(props) { 
    var data = props.batsman;
    return ( 
        <div className="App"> 
        <table> 
        <tbody>
            <tr> 
            <th>Name</th> 
            <th>Balls</th> 
            <th>Runs</th> 
            <th>Strike Rate</th> 
            <th>Fours</th> 
            <th>Sixes</th>
            <th>Out Decision</th> 
            </tr> 
            {data.map((player) => { 
            return ( 
                <tr key={player["id"]}> 
                <td>{player["name"]}</td> 
                <td>{player["balls"]}</td> 
                <td>{player["runs"]}</td> 
                <td>{player["strkRate"]}</td> 
                <td>{player["fours"]}</td> 
                <td>{player["sixes"]}</td>
                <td>{player["outDec"]}</td> 
                </tr> 
            ) 
            })} 
            </tbody>
        </table> 
        </div> 
    ); 
} 

function BowlerTable(props) { 
    var data = props.bowler;
    return ( 
        <div className="App"> 
        <table> 
        <tbody>
            <tr> 
            <th>Name</th> 
            <th>Overs</th> 
            <th>Runs</th> 
            <th>Maidens</th> 
            <th>Economy</th> 
            <th>Wickets</th>
            </tr> 
            {data.map((player) => { 
            return ( 
                <tr key={player["id"]}> 
                <td>{player["name"]}</td> 
                <td>{player["overs"]}</td> 
                <td>{player["runs"]}</td> 
                <td>{player["maidens"]}</td> 
                <td>{player["economy"]}</td> 
                <td>{player["wickets"]}</td>
                </tr> 
            ) 
            })} 
            </tbody>
        </table> 
        </div> 
    ); 
} 

function WicketsTable(props) { 
    var data = props.wickets.fow;
    console.log(data);
    return ( 
        <div className="App"> 
        <table> 
            <tbody>
            <tr> 
            <th>Batsman Name</th> 
            <th>Overs</th> 
            <th>Runs</th> 
            </tr> 
            {data.map((player) => { 
            return ( 
                <tr key={player["batsmanId"]}> 
                <td>{player["batsmanName"]}</td> 
                <td>{player["overNbr"]}</td> 
                <td>{player["runs"]}</td> 
                </tr> 
            ) 
            })} 
            </tbody>
        </table> 
        </div> 
    ); 
} 

export {scorecard,BatsmanTable,BowlerTable,WicketsTable};