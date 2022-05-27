import React,{Component} from 'react'
import {scorecard,BatsmanTable,BowlerTable,WicketsTable} from './getScoreCard';
import Dheader from './detailsHeader';

class Matchdetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
      
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
        })
      })
  }

  render(){
    var { isLoaded , items } = this.state;
    var i = 1;
    if(!isLoaded){
        return (
          <div>
          <Dheader />
          <div> It's Loading....</div>
        </div>
            )
    }else{
        var obj = scorecard(items);
        var scores = obj.scorecard;
      return (
        <div className="App">
          <Dheader />
          <h1>ScoreCard</h1>
          <ul>
          {scores.map(item => (
              <li key={i++} className='btn-block'>
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