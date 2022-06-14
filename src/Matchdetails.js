import React,{Component} from 'react'
import {scorecard,BatsmanTable,BowlerTable,WicketsTable} from './getScoreCard';
import {Link} from 'react-router-dom'

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
          <div>
          <Link to={'/matchCommentary/' + matchId}>Commentary</Link>
          <div> It's Loading....</div>
        </div>
            )
    }else{
        var obj = scorecard(items);
        var scores = obj.scorecard;
      return (
        <div className="App">
          <Link to={'/matchCommentary/' + matchId}>Commentary</Link>
          <h1>ScoreCard</h1>
          <ul>
          {scores.map(item => (
              <li key={i++}>
                <BatsmanTable batsman={item.batsman} />
                <br></br>
                <br></br>
                <BowlerTable bowler={item.bowler} />
                <br></br>
                <br></br>
                <WicketsTable wickets={item.fow[0]} />
                <br></br>
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Matchdetails