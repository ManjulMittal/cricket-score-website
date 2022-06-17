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
            {opcMatches.map(match => (
                <div  className='rc_whole' key={match["matchId"]}>
                <div className="part1">
                    <div>{match["seriesName"]}</div>
                    <div>{match["matchDesc"]}</div>
                    <div>{match["stadium"]}</div>
                    <div>{match["city"]}</div>
                </div>
                <div className="part2">
                <div className="rc_block uc_team">{match["team1Name"]}</div>
                <div className="rc_block uc_team">{match["team2Name"]}</div>    
                </div>
                </div>
            ))}
        </div>
    );
}

export default UpcomingDetails;