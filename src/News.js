import React,{Component} from 'react'
import './news.css';
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
            <div className="Loading"> It's Loading....</div>
          </div>
      )
    }else{
        let newww = news["newsList"]
        let News = newww.filter(function(item){
            return item.story !== undefined;
        })
        console.log(News);
      return (
        <div>
          <ul className='news_list'>
            {News.map(item => (
              <li key={i++} className='box'>
                <div className='top-div'>
                <h3>{item["story"]["hline"]}</h3>
                </div>
                <div className='bottom-div'>
                <p>{item["story"]["intro"]}</p> <br></br> 
                <p>{item["story"]["context"]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default News;
