import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react'
import Header from './Header';
class News extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded : false,
      news : [],
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
    fetch(`https://unofficial-cricbuzz.p.rapidapi.com/news/list`, options)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded : true,
          news : json, 
        })
      })
  }

  render(){
    var { isLoaded , news } = this.state;
    var i = 1;
    if(!isLoaded){
      return (
          <div>
              <Header />
            <div> It's Loading....</div>
          </div>
      )
    }else{
        let newww = news["newsList"]
        let News = newww.filter(function(item){
            return item.story !== undefined;
        })
        console.log(News);
      return (
        <div className="App">
            <Header />
          <h1>News</h1>
          <ul>
            {News.map(item => (
              <li key={i++} className='btn-block btn-outline-info'>
                <h3>{item["story"]["hline"]}</h3>
                <br></br>
                <p>{item["story"]["intro"]}</p> <br></br> 
                <p>{item["story"]["seoHeadline"]}</p> <br></br>
                <p>{item["story"]["context"]}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default News;
