import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import * as firebase from 'firebase';
class App extends Component {
  constructor(){
    super();
    this.state={
bilgi:{
  "Experiences":[],
  "Projects":[],
  "Skills":[
    {
      "ad":"JavaScript",
      "yuzde":"50%"
    },
    {
      "ad":"C",
      "yuzde":"60%"
    },
    {
      "ad":"Java",
      "yuzde":"50%"
    },
    {
      "ad":"Arduino",
      "yuzde":"65%"
    }
  ],
  "Language":[],
  "Education":[]
  }
 };
}
  componentWillMount(){
    const rootRef = firebase.database().ref();
    rootRef.on('value', snap => {
      this.setState({
        bilgi: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={this.state.bilgi.image} alt=""
                  width="100px" height="100px"/>
                  <h1 className="name">{this.state.bilgi.name}</h1>
                  <h3 className="tagline">Web Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" +  this.state.bilgi.email}>{this.state.bilgi.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href={this.state.bilgi.phone}>{this.state.bilgi.phone}</a></li>
                      <li className="website"><i className="fa fa-globe"></i><a href={this.state.bilgi.website} target="_blank">{this.state.bilgi.website}</a></li>
                      <li className="twitter"><i className="fa fa-twitter"></i><a href={this.state.bilgi.twitterlink} target="_blank">{this.state.bilgi.twitter}</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Eğitim</h2>
                  <div className="item">
                      <h4 className="degree">Bilgisayar Mühendisliği</h4>
                      <h5 className="meta">Süleyman Demirel Üniversitesi</h5>
                      <div className="time">2013 - Devam Ediyor</div>
                  </div>
              </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Diller</h2>
                  <ul className="list-unstyled interests-list">
                      <li>İngilizce <span className="lang-desc">(Orta)</span></li>
                      <li>Almanca <span className="lang-desc">(Temel)</span></li>
                  </ul>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">İlgiler</h2>
                  <ul className="list-unstyled interests-list">
                      <li>Bilardo</li>
                      <li>Masa Tenisi</li>
                  </ul>
              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Kariyer Profil</h2>
                  <div className="summary">
                      <p>{this.state.bilgi.career}</p>
                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Deneyimler</h2>

                {this.state.bilgi.Experiences.map((item,key) => <Experience item={item} key={key} />)}

              </section>

              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projeler</h2>
                  <div className="intro">
                      <p>{this.state.bilgi.projeAciklama}</p>
                  </div>
                  {this.state.bilgi.Projects.map((item,key) => <Projects item={item} key={key} />)}
              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Yeterlilikler & Beceriler</h2>
                  <div className="skillset">
                  {this.state.bilgi.Skills.map((item,key) => <Skills item={item} key={key} />)}

                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default App;
