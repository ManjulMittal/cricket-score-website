//import './App.css';
import RecentDetails from './recentDetails'
//import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
class Recent extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      items : [],
      
    }
  }

  componentDidMount(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
        }
    };
    
    fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent', options)
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
          <div className="Loading"> It's Loading....</div>
        </div>
            )
    }else{
        var recent = items["typeMatches"];
      return (
        <div>
          <div>
            {recent.map(item => (
              <div key={i++}>
                <RecentDetails obj={item}/>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Recent;
