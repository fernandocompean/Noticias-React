import React, {Component} from 'react';

class App extends Component {
  state = { 
    noticias: []
   }

  componentDidMount() {

    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=f418e137e59e447a8c1a480f863c18f2`;

    const resp = await fetch(url);
    const noticias = await resp.json();

    this.setState({
      noticias: noticias.articles
    })
  }

  render() {
    return (
      <h1>Noticias</h1>
    );
  }
}

export default App;
