import React, {Component, Fragment} from 'react';
import Header from './components/Header';

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
      <Fragment>
        <Header
          titulo= 'Noticias' 
        />

        <div className="container white noticias-contenedor"></div>

      </Fragment >
    );
  }
}

export default App;
