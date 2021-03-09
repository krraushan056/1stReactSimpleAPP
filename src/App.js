import React,{ Component } from 'react';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search.box.compont';
import './App.css';
class App extends Component{
  constructor(){
    super();


    this.state={
      monsters:[],
      searchField:''
    };
    this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){       
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response  => response.json())
    .then(users=>this.setState({monsters:users}))
    
  };

  handleChange=e=>{
    this.setState({searchField:e.target.value});
   
  }; 
  
  render()
  {
  // when we click that is when set_sate is called render method is again called
  const {monsters,searchField}=this.state;
  const filteredMonsters=monsters.filter(monster=>
  monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  

    return(
    <div className="App">
      <h1> MONSTERS ROLODEX </h1>
      <SearchBox placeholder='Search Monsters' handleChange={this.handleChange}
   />
      <CardList monsters={filteredMonsters}/>

     
    
  </div>
  );
}
  
}

export default App;
