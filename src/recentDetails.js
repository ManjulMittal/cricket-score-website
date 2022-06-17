import {Link} from 'react-router-dom'
import './Recent.css';

function overTransform(initial){
    if(initial === undefined){
        return "";
    }
    if((parseFloat(initial)*10)%10==6){
        let tmp = parseInt(initial)+1;
        initial = tmp;
        initial += ".0";
    }
    else if((parseFloat(initial)*10)%10==0){
        initial += ".0";
    }
    return initial;
}

function HandleScores(props){
    let obj = props.obj;
    let team1Name = props.team1;
    let team2Name = props.team2;
    if(obj === undefined){
        return (
            <div className='Loading'>No Scores</div>
        )
    }
    let scard = {};
    if(obj.team1Score){
        if(obj.team1Score.inngs1){
            if(obj.team1Score.inngs1.inningsId){
                scard["team1inngs1id"] = obj.team1Score.inngs1.inningsId;
                if(obj.team1Score.inngs1.runs){
                    scard["team1inngs1Runs"] = obj.team1Score.inngs1.runs;
                }
                else{
                    scard["team1inngs1Runs"] = "0";
                }

                if(obj.team1Score.inngs1.wickets){
                    scard["team1inngs1Wickets"] = obj.team1Score.inngs1.wickets;
                }
                else{
                    scard["team1inngs1Wickets"] = "0";
                }
                
                if(obj.team1Score.inngs1.overs){
                    scard["team1inngs1Overs"] = obj.team1Score.inngs1.overs;
                }
                else{
                    scard["team1inngs1Runs"] = "    ";
                    scard["team1inngs1Overs"] = "0.0";
                }
            }
            if(obj.team1Score.inngs1.isDeclared){
                scard["team1inngs1Dec"] = obj.team1Score.inngs1.isDeclared;
            }
            if(obj.team1Score.inngs1.isFollowOn){
                scard["team1inngs1FO"] = obj.team1Score.inngs1.isFollowOn;
            }
        }
        if(obj.team1Score.inngs2){
            if(obj.team1Score.inngs2.inningsId){
                scard["team1inngs2id"] = obj.team1Score.inngs2.inningsId;
                if(obj.team1Score.inngs2.runs){
                    scard["team1inngs2Runs"] = obj.team1Score.inngs2.runs;
                }
                else{
                    scard["team1inngs2Runs"] = "0";
                }
    
                if(obj.team1Score.inngs2.wickets){
                    scard["team1inngs2Wickets"] = obj.team1Score.inngs2.wickets;
                }
                else{
                    scard["team1inngs2Wickets"] = "0";
                }
                    
                if(obj.team1Score.inngs2.overs){
                    scard["team1inngs2Overs"] = obj.team1Score.inngs2.overs;
                }
                else{
                    scard["team1inngs2Runs"] = "   ";
                    scard["team1inngs2Overs"] = "0.0";
                }
                if(obj.team1Score.inngs2.isDeclared){
                    scard["team1inngs2Dec"] = obj.team1Score.inngs2.isDeclared;
                }
                if(obj.team1Score.inngs2.isFollowOn){
                    scard["team1inngs2FO"] = obj.team1Score.inngs2.isFollowOn;
                }
            }
        }
    }
    if(obj.team2Score){
        if(obj.team2Score.inngs1){
            if(obj.team2Score.inngs1.inningsId){
                scard["team2inngs1id"] = obj.team2Score.inngs1.inningsId;
                if(obj.team2Score.inngs1.runs){
                    scard["team2inngs1Runs"] = obj.team2Score.inngs1.runs;
                }
                else{
                    scard["team2inngs1Runs"] = "0";
                }
    
                if(obj.team2Score.inngs1.wickets){
                    scard["team2inngs1Wickets"] = obj.team2Score.inngs1.wickets;
                }
                else{
                    scard["team2inngs1Wickets"] = "0";
                }
                    
                if(obj.team2Score.inngs1.overs){
                    scard["team2inngs1Overs"] = obj.team2Score.inngs1.overs;
                }
                else{
                    scard["team2inngs1Runs"] = "   ";
                    scard["team2inngs1Overs"] = "0.0";
                }
                if(obj.team2Score.inngs1.isDeclared){
                    scard["team2inngs1Dec"] = obj.team2Score.inngs1.isDeclared;
                }
                if(obj.team2Score.inngs1.isFollowOn){
                    scard["team2inngs1FO"] = obj.team2Score.inngs1.isFollowOn;
                }
            }
        }
        if(obj.team2Score.inngs2){
            if(obj.team2Score.inngs2.inningsId){
                scard["team2inngs2id"] = obj.team2Score.inngs2.inningsId;
                if(obj.team2Score.inngs2.runs){
                    scard["team2inngs2Runs"] = obj.team2Score.inngs2.runs;
                }
                else{
                    scard["team2inngs2Runs"] = "0";
                }
        
                if(obj.team2Score.inngs2.wickets){
                    scard["team2inngs2Wickets"] = obj.team2Score.inngs2.wickets;
                }
                else{
                    scard["team2inngs2Wickets"] = "0";
                }        
                    
                if(obj.team2Score.inngs2.overs){
                    scard["team2inngs2Overs"] = obj.team2Score.inngs2.overs;
                }
                else{
                    scard["team2inngs2Runs"] = " ";
                    scard["team2inngs2Overs"] = "0.0";
                }
                if(obj.team2Score.inngs2.isDeclared){
                    scard["team2inngs2Dec"] = obj.team2Score.inngs2.isDeclared;
                }
                if(obj.team2Score.inngs2.isFollowOn){
                    scard["team2inngs2FO"] = obj.team2Score.inngs2.isFollowOn;
                }
            }
        }
    }
    if(scard["team1inngs2Runs"] === undefined && scard["team2inngs2Runs"] === undefined){
    return (
        <div>
            <div className="rc_block">
            <div className="rc_team">{team1Name}</div>
            {scard["team1inngs1Overs"] === undefined ? <div>{scard["team1inngs1Runs"]}</div> :
            <div className="rc_score">{scard["team1inngs1Runs"]}/{scard["team1inngs1Wickets"]}</div>}
            <div className="rc_overs">{overTransform(scard["team1inngs1Overs"])}</div>
            </div>
            <div className="rc_block">
            <div className="rc_team">{team2Name}</div>
            {scard["team2inngs1Overs"] === undefined ? <div>{scard["team2inngs1Runs"]}</div> :
            <div className="rc_score">{scard["team2inngs1Runs"]}/{scard["team2inngs1Wickets"]}</div>}
            <div className="rc_overs">{overTransform(scard["team2inngs1Overs"])}</div>
            </div>
        </div>
    )
    }else{
        return (
        <div>
            <div className="rc_block">
            <div className="rc_team">{team1Name}</div>
            {scard["team1inngs2Overs"] === undefined ?
            <div className="rc_score">{scard["team1inngs1Runs"]}/{scard["team1inngs1Wickets"]}</div>
            : <div className="rc_score">{scard["team1inngs1Runs"]}/{scard["team1inngs1Wickets"]}  &  {scard["team1inngs2Runs"]}/{scard["team1inngs2Wickets"]}</div>}
            </div>
            <div className="rc_block">
            <div className="rc_team">{team2Name}</div>
            {scard["team2inngs2Overs"] === undefined ?
            <div className="rc_score">{scard["team2inngs1Runs"]}/{scard["team2inngs1Wickets"]}</div>
            : <div className="rc_score">{scard["team2inngs1Runs"]}/{scard["team2inngs1Wickets"]}  &  {scard["team2inngs2Runs"]}/{scard["team2inngs2Wickets"]}</div>}
            </div>
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
            {opcMatches.map(match => (
                <div key={match["matchId"]} className="rc_whole">
                    <Link to={'/matchDetails/' + match["matchId"]} style={{textDecoration:'none'}}>
                    <div className="part1">
                    <div>{match["seriesName"]}</div>
                    <div>{match["matchDesc"]}</div>
                    <div>{match["stadium"]}</div>
                    <div>{match["city"]}</div>
                    </div>

                    <div className="part2">
                    <div><HandleScores obj = {match["scores"]} team1={match["team1Name"]} team2={match["team2Name"]}/></div>
                    <div className="status">{match["status"]}</div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RecentDetails;