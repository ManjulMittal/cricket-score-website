import React,{Component} from 'react'
import {scorecard,BatsmanTable,BowlerTable,WicketsTable} from './getScoreCard';
import {Link} from 'react-router-dom'
import './Scorecard.css';

class Matchdetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
      matchId: undefined,
    }
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
    
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard?matchId=${matchID}`, options)
        .then(response => response.json())
        .then(json =>  {
        this.setState({
          isLoaded : true,
          items : json, 
          matchId: matchID,
        })
      })
  }

  render(){
    var { isLoaded , items, matchId} = this.state;
    var i = 1;
    if(!isLoaded){
        return (
          <div className="Loading"><br></br>It's Loading....</div>
        )
    }else{
        var obj = scorecard(items);
        var scores = obj.scorecard;
      return (
        <div class="whole">
          <div class="nav-icon">
          <Link to={'/matchCommentary/' + matchId} className="con">Commentary</Link></div>
          <ul className='main_content'>
          {scores.map(item => (
              <li key={i++}>
                <div className='top_div'>
                <span className='team'><strong>{item["batTeamName"]}</strong></span>
                <span className='score'>{item["score"]}/{item["wickets"]}</span>
                <span className='overs'>({item["overs"]})</span>
                <span className='run_rate'>RR: {item["runRate"]}</span>
                </div>
                <div className="bottom1">
                <br></br>
                <BatsmanTable batsman={item.batsman} />
                <br></br>
                </div>
                <p className="sub"><strong>Bowling</strong></p>
                <div className="bottom2">
                <BowlerTable bowler={item.bowler} />
                <br></br>
                </div>
                <p className="sub"><strong>Fall of Wickets</strong></p>
                <div className="bottom3">
                <WicketsTable wickets={item.fow[0]} />
                <br></br>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Matchdetails