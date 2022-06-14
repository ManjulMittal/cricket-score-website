function UpcomingDetails(props){
    let obj = props.obj;
    let opc = {};
    if(obj.matchType){
        opc["matchType"] = obj["matchType"];
    }
    opc["matches"] = [];
    if(obj.seriesAdWrapper){
        for(let i in obj.seriesAdWrapper){
            if(obj.seriesAdWrapper[i].seriesMatches && obj.seriesAdWrapper[i].seriesMatches.matches){
                for(let j in obj.seriesAdWrapper[i].seriesMatches.matches){
                    let reMatch = {};
                    let match = obj.seriesAdWrapper[i].seriesMatches.matches[j];
                    if(match.matchInfo && match.matchInfo.team1 && match.matchInfo.team2 && match.matchInfo.venueInfo){
                        reMatch["seriesName"] = match.matchInfo.seriesName;
                        reMatch["matchDesc"] = match.matchInfo.matchDesc;
                        reMatch["matchFormat"] = match.matchInfo.matchFormat;
                        reMatch["startDate"] = match.matchInfo.startDate;
                        reMatch["team1Name"] = match.matchInfo.team1.teamName;
                        reMatch["team1SName"] = match.matchInfo.team1.teamSName;
                        reMatch["team2Name"] = match.matchInfo.team2.teamName;
                        reMatch["team2SName"] = match.matchInfo.team2.teamSName;
                        reMatch["stadium"] = match.matchInfo.venueInfo.ground;
                        reMatch["city"] = match.matchInfo.venueInfo.city;
                        reMatch["matchId"] = match.matchInfo.matchId;
                    }
                    if(reMatch["city"] !== undefined)
                    opc["matches"].push(reMatch);
                }
            }
        }
    }
    let opcMatches = opc["matches"]
    return (
        <div>
            <h1>{opc["matchType"]}</h1>
            {opcMatches.map(match => (
                <div  className='btn-block btn-outline-info' key={match["matchId"]}>

                    <div>Series Name: {match["seriesName"]}</div>
                    
                    <div>Description: {match["matchDesc"]}</div>
                    
                    <div>Format: {match["matchFormat"]}</div>
                    
                    <div>Team1: {match["team1Name"]}</div>
                    
                    <div>Team2: {match["team2Name"]}</div>
                    
                    <div>stadium: {match["stadium"]}</div>

                    <div>city: {match["city"]}</div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingDetails;