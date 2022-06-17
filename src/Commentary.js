import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Commentary.css';

class Commentary extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
      matchId: undefined,
    }
  }


  printComment(obj){
    if(obj.commentary === undefined){
      return "";
    }
    let line = obj.commentary.commtxt;
    let list = obj.commentary.commentaryFormats;
    for(let i in list){
        if(list[i].value){
            for(let j in list[i].value){
                if(list[i].value[j].id && list[i].value[j].value){
                    line = line.replace(list[i].value[j].id, list[i].value[j].value);
                }
            }
        }
    }
    return line;
  }



  componentDidMount(){
    const pathname = window.location.pathname;
    let matchID = pathname.substring(pathname.lastIndexOf('/') + 1);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/matches/get-commentaries?matchId=${matchID}`, options)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          items : json,
          matchId: matchID,
        })
      })
  }

  render(){
    var { isLoaded , items, matchId } = this.state;
    var i = 1;
    var commentaryTest = items.commentaryLines;
    if(!isLoaded){
      return (
        <div class="Loading"><br></br>It's Loading....</div>
      )
    }else{
      var commentary = commentaryTest;
      var innings = items["miniscore"]["inningsScores"][0]["inningsScore"];
      var target = innings[0]["target"];
      var xyz = 0;
      for(i in innings){
        if((parseFloat(innings[i]["overs"])*10)%10==6){
          let tmp = parseInt(innings[i]["overs"])+1;
          innings[i]["overs"] = tmp;
          innings[i]["overs"] += ".0";
        }
      }
      return (
        <div className="whole">
          <div className='nav-icon'>
          <Link to={'/matchDetails/' + matchId} className="con">Scores</Link></div>
          <div className="main_content">
          <ul className="score_board">
          {innings.map(curInn => (
              (target === undefined || xyz++ > 0) ? <li key = {i++}>
              <span className="team"><strong>{curInn["batTeamShortName"]}</strong></span>
              <span className="score">{curInn["runs"]}/{curInn["wickets"]}</span>
              <span className="overs">({curInn["overs"]})</span>
            </li> : <li key = {i++}>
              <span className="team"><strong>{curInn["batTeamShortName"]}</strong></span>
              <span className="score">{curInn["runs"]}/{curInn["wickets"]}</span>
              <span className="overs">({curInn["overs"]})</span>
              <span className="target"><strong>Target: {target}</strong></span> 
            </li> 
            ))}
          </ul>
          <ul className='comment_list'>
            {commentary.map(item => (
              item.commentary === undefined ? null : <li key={i++}>
              {this.printComment(item)}
              <br></br>
              <br></br>
            </li>
            ))}
          </ul></div>
        </div>
      );
    }
  }
}

export default Commentary;
