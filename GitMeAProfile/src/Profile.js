import React , { Component } from 'react';
import notfound from './notfound.png';




class Profile extends Component {


  render(){
    let userdata1 = this.props.userdata;
    let followers = `${userdata1.homeurl}/followers`;
    let following = `${userdata1.homeurl}/following`;
    let repos = `${userdata1.homeurl}/repositories`;

    if(userdata1.notfound === null){
      return(
        <div>
        </div>
      );
    }





    else if(userdata1.notfound === 'Not Found'){
      return(
        <div className="notfound">
          <img src={notfound} width="200" height="200" />
          <p>Hey are you sure what are you looking for?</p>
        </div>
      );
    }

    else{
      return(
        <section className="github-profile">
           <div className="github-profile-info">
             <a href={userdata1.homeUrl} target="_blank" title={userdata1.name || userdata1.username}><img src={userdata1.avatar} /></a>
             <h2><a href={userdata1.homeUrl} title={userdata1.username} target="_blank">{userdata1.name || userdata1.username}</a></h2>
             <h3>{userdata1.location}</h3>
           </div>
           <div className="github-profile-state">
             <ul>
                <li>
                   <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata1.followers}</i><span>Followers</span></a>
                </li>
                <li>
                   <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata1.repos}</i><span>Repositoriy</span></a>
                </li>
                <li>
                   <a href={following} target="_blank" title="Number Of Following"><i>{userdata1.following}</i><span>Following</span></a>
                </li>
             </ul>
           </div>
         </section>
       );
    }

  }
}



export default Profile;
