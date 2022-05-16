import './App.css';
import UpcomingDetails from './upcomingDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import Header from './Header';
class Upcoming extends Component{
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
    
    fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=upcoming', options)
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
          <Header />
          <div> It's Loading....</div>
        </div>
            )
    }else{
        var upcoming = items["typeMatches"];
      return (
        <div className="App">
          <Header />
          <h1>Upcoming</h1>
          <div>
            {upcoming.map(item => (
              <div key={i++}>
                <UpcomingDetails obj={item}/>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Upcoming;
