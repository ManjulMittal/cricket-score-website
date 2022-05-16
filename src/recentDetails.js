import {Link} from 'react-router-dom'
function HandleScores(props){
    let obj = props.obj;
    if(obj === undefined){
        return (
            <div>No Scores</div>
        )
    }
    let scard = {};
    if(obj.team1Score){
        if(obj.team1Score.inngs1){
            if(obj.team1Score.inngs1.inningsId && obj.team1Score.inngs1.runs && obj.team1Score.inngs1.wickets && obj.team1Score.inngs1.overs){
                scard["team1inngs1Runs"] = obj.team1Score.inngs1.runs;
                scard["team1inngs1Wickets"] = obj.team1Score.inngs1.wickets;
                scard["team1inngs1Overs"] = obj.team1Score.inngs1.overs;
                scard["team1inngs1id"] = obj.team1Score.inngs1.inningsId;
            }
            if(obj.team1Score.inngs1.isDeclared){
                scard["team1inngs1Dec"] = obj.team1Score.inngs1.isDeclared;
            }
            if(obj.team1Score.inngs1.isFollowOn){
                scard["team1inngs1FO"] = obj.team1Score.inngs1.isFollowOn;
            }
        }
        if(obj.team1Score.inngs2){
            if(obj.team1Score.inngs2.inningsId && obj.team1Score.inngs2.runs && obj.team1Score.inngs2.wickets && obj.team1Score.inngs2.overs){
                scard["team1inngs2Runs"] = obj.team1Score.inngs2.runs;
                scard["team1inngs2Wickets"] = obj.team1Score.inngs2.wickets;
                scard["team1inngs2Overs"] = obj.team1Score.inngs2.overs;
                scard["team1inngs2id"] = obj.team1Score.inngs2.inningsId;
            }
            if(obj.team1Score.inngs2.isDeclared){
                scard["team1inngs2Dec"] = obj.team1Score.inngs2.isDeclared;
            }
            if(obj.team1Score.inngs2.isFollowOn){
                scard["team1inngs2FO"] = obj.team1Score.inngs2.isFollowOn;
            }
        }
    }
    if(obj.team2Score){
        if(obj.team2Score.inngs1){
            if(obj.team2Score.inngs1.inningsId && obj.team2Score.inngs1.runs && obj.team2Score.inngs1.wickets && obj.team2Score.inngs1.overs){
                scard["team2inngs1Runs"] = obj.team2Score.inngs1.runs;
                scard["team2inngs1Wickets"] = obj.team2Score.inngs1.wickets;
                scard["team2inngs1Overs"] = obj.team2Score.inngs1.overs;
                scard["team2inngs1id"] = obj.team2Score.inngs1.inningsId;
            }
            if(obj.team2Score.inngs1.isDeclared){
                scard["team2inngs1Dec"] = obj.team2Score.inngs1.isDeclared;
            }
            if(obj.team2Score.inngs1.isFollowOn){
                scard["team2inngs1FO"] = obj.team2Score.inngs1.isFollowOn;
            }
        }
        if(obj.team2Score.inngs2){
            if(obj.team2Score.inngs2.inningsId && obj.team2Score.inngs2.runs && obj.team2Score.inngs2.wickets && obj.team2Score.inngs2.overs){
                scard["team2inngs2Runs"] = obj.team2Score.inngs2.runs;
                scard["team2inngs2Wickets"] = obj.team2Score.inngs2.wickets;
                scard["team2inngs2Overs"] = obj.team2Score.inngs2.overs;
                scard["team2inngs2id"] = obj.team2Score.inngs2.inningsId;
            }
            if(obj.team2Score.inngs2.isDeclared){
                scard["team2inngs2Dec"] = obj.team2Score.inngs2.isDeclared;
            }
            if(obj.team1Score.inngs1.isFollowOn){
                scard["team2inngs2FO"] = obj.team2Score.inngs2.isFollowOn;
            }
        }
    }
    if(scard["team1inngs2Runs"] === undefined){
    return (
        <div>
            <h4>Innings1</h4>
            <h2>Team1</h2>
            <div>Runs: {scard["team1inngs1Runs"]}</div>
            <div>Wickets: {scard["team1inngs1Wickets"]}</div>
            <div>Overs: {scard["team1inngs1Overs"]}</div>
            <h2>Team2</h2>
            <div>Runs: {scard["team2inngs1Runs"]}</div>
            <div>Wickets: {scard["team2inngs1Wickets"]}</div>
            <div>Overs: {scard["team2inngs1Overs"]}</div>
        </div>
    )
    }else{
        return (
        <div>
            <h4>Innings1</h4>
            <h2>Team1</h2>
            <div>Runs: {scard["team1inngs1Runs"]}</div>
            <div>Wickets: {scard["team1inngs1Wickets"]}</div>
            <div>Overs: {scard["team1inngs1Overs"]}</div>
            <h2>Team2</h2>
            <div>Runs: {scard["team2inngs1Runs"]}</div>
            <div>Wickets: {scard["team2inngs1Wickets"]}</div>
            <div>Overs: {scard["team2inngs1Overs"]}</div>
            <h4>Innings2</h4>
            <h2>Team1</h2>
            <div>Runs: {scard["team1inngs2Runs"]}</div>
            <div>Wickets: {scard["team1inngs2Wickets"]}</div>
            <div>Overs: {scard["team1inngs2Overs"]}</div>
            <h2>Team2</h2>
            <div>Runs: {scard["team2inngs2Runs"]}</div>
            <div>Wickets: {scard["team2inngs2Wickets"]}</div>
            <div>Overs: {scard["team2inngs2Overs"]}</div>
        </div>
        )
    }
}


function RecentDetails(props){
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
                        reMatch["endDate"] = match.matchInfo.endDate;
                        reMatch["team1Name"] = match.matchInfo.team1.teamName;
                        reMatch["team1SName"] = match.matchInfo.team1.teamSName;
                        reMatch["team2Name"] = match.matchInfo.team2.teamName;
                        reMatch["team2SName"] = match.matchInfo.team2.teamSName;
                        reMatch["stadium"] = match.matchInfo.venueInfo.ground;
                        reMatch["city"] = match.matchInfo.venueInfo.city;
                        reMatch["status"] = match.matchInfo.status;
                        reMatch["matchId"] = match.matchInfo.matchId;
                    }
                    if(match.matchScore){
                        reMatch["scores"] = match.matchScore;
                    }
                    if(reMatch["status"] !== undefined)
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
                    <Link to={'/matchCommentary/' + match["matchId"]}>

                    <div>Series Name: {match["seriesName"]}</div>
                    
                    <div>Description: {match["matchDesc"]}</div>
                    
                    <div>Format: {match["matchFormat"]}</div>
                    
                    <div>Team1: {match["team1Name"]}</div>
                    
                    <div>Team2: {match["team2Name"]}</div>
                    
                    <div>stadium: {match["stadium"]}</div>

                    <div>city: {match["city"]}</div>

                    <div>Status: {match["status"]}</div>

                    <div>Score: <HandleScores obj = {match["scores"]} /></div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RecentDetails;