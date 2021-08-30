import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      movies:[
        {id:0, rating: 4, title: 'The Ballad of Buster Scrugs', image: 'pelicula01.jpg'},
        {id:1, rating: 3, title: 'The Sister Brothers', image: 'pelicula04.jpg'},
        {id:2, rating: 5, title: 'The Homesman', image: 'pelicula02.jpg'},
        {id:3, rating: 5, title: 'Django', image: 'pelicula03.jpg'},
        {id:4, rating: 5, title: 'Hostiles', image: 'pelicula05.jpg'},
        {id:5, rating: 5, title: 'Slow west', image: 'pelicula06.jpg'},
        {id:6, rating: 5, title: 'Jane Got a Gun', image: 'pelicula07.jpg'},
        {id:7, rating: 5, title: 'The Hateful Eight', image: 'pelicula08.jpg'},
        {id:8, rating: 5, title: 'The Revenant', image: 'pelicula09.jpg'},
        {id:9, rating: 5, title: 'The Missing', image: 'pelicula10.jpg'},
        {id:10, rating: 5, title: 'Brimstone', image: 'pelicula11.jpg'},
        {id:11, rating: 5, title: 'Badland', image: 'pelicula12.jpg'},
        {id:12, rating: 5, title: 'La balada de Lefty Brown', image: 'pelicula13.jpg'},
        {id:13, rating: 5, title: 'Bone Tomahawk', image: 'pelicula14.jpg'}
      ]
    };
  }
  render(){  
    return (
    <div className="App">
      <Menu title="Vladi.codes" />
      <List items={this.state.movies} />
    </div>
  );
  }
}

export default App;
