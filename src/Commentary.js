import React,{Component} from 'react'
import {Link} from 'react-router-dom'

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
          <div>
            <div>
            <Link to={'/matchDetails/' + matchId}>ScoreCard</Link>  </div>
            <div> It's Loading....</div>
          </div>
      )
    }else{
      var commentary = commentaryTest
      return (
        <div>
          <div>
          <Link to={'/matchDetails/' + matchId}>ScoreCard</Link></div>
          <h1>Commentary</h1>
          <ul>
            {commentary.map(item => (
              item.commentary === undefined ? null : <li key={i++}>
              {this.printComment(item)}
            </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Commentary;
