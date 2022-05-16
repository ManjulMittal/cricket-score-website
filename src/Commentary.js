import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import Dheader from './detailsHeader';
class Commentary extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
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
        })
      })
  }

  render(){
    var { isLoaded , items } = this.state;
    var i = 1;
    var commentaryTest = items.commentaryLines;
    if(!isLoaded){
      return (
          <div>
              <Dheader />
            <div> It's Loading....</div>
          </div>
      )
    }else{
      var commentary = commentaryTest.filter(function(comm){
        return comm.commtxt !== undefined
      })
      return (
        <div className="App">
            <Dheader />
          <h1>Commentary</h1>
          <ul>
            {commentary.map(item => (
              <li key={i++} className='btn-block btn-outline-info'>
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
