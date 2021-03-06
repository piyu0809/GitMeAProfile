import React , { Component } from 'react';
import Profile from './Profile';
import Search from './Search';


const API = 'https://api.github.com/users';


class Github extends Component {


  constructor(props){
    super(props);

    this.state = {
      username: '',
      avatar: '',
      name: '',
      repos: '',
      followers: '',
      following: '',
      homeurl: '',
      notfound: ''
    };
  }


  getprofile(username){
    if(username === ''){
          this.setState({
              notfound: null
            })
        }
    else{
        let finalurl = `${API}/${username}`;
        fetch(finalurl)
        .then((res) => res.json() )
        .then((data) => {
          this.setState({
            username: data.login,
            avatar: data.avatar_url,
            name: data.name,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            homeurl: data.html_url,
            notfound: data.message
          })
        })
        .catch((error) => console.log('there was problem fethcing data'));
      }
  }

  componentDidMount(){
    this.getprofile(this.state.username);
  }
  render(){
    return(
      <div>

        <section id='card'>
          <h4>
              Lets get you a github profile you want to view
          </h4>

          <Search searchprofile={this.getprofile.bind(this)} />

          <Profile userdata={this.state} />

        </section>
      </div>
    );
  }
}



export default Github;
