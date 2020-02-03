
import './App.css';
import Card from './CardMovie/CardMovie.js';
import React, { Component } from 'react';
import { Rate,Input } from 'antd';
import Form from './Form/Form.js'
//import Formulaire from './Formulaire/Formulaire.js';
const movie1={
  id: 1,
  url: 'data:image/jpeg;base64,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',
  title: 'JOKER',
  date_sortie: 2019,
  rate: 5

};
const movie2={
  id: 2,
  url: 'https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,437,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/cette-photo-meconnue-des-coulisses-de-titanic-va-exciter-tous-les-fans-du-film-3501179/81447098-1-fre-FR/Cette-photo-meconnue-des-coulisses-de-Titanic-va-exciter-tous-les-fans-du-film.jpg',
  title: 'Titanic',
  date_sortie: 1997,
  rate: 4
};
const movie3={
  id: 3,
  url: 'https://i.ytimg.com/vi/T0MmkG_nG1U/maxresdefault.jpg',
  title: 'Me before you',
  date_sortie: 2016,
  rate: 4
};

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      value: 1,//rate, MinRatingfilter
      titlefilter:'',
      movies: [movie1,movie2,movie3],
      
      
    }
    }
  ///For add new movie/////
  addnewMovie = (newmovies) => {
    this.setState({
      movies: this.state.movies.concat(newmovies)
    })
  }

  ///For search and show all movies////
  getAllMovies(){
    return this.state.movies.filter(
      el=>el.rate>=this.state.value&&
      el.title.toLowerCase().includes(this.state.titlefilter.toLowerCase())
    )
    }

  //////////Begin for show/hide modal/////////////
  // showModal = () => {
  //   this.setState({ visible: true });
  // };

  // handleCancel = () => {
  //   this.setState({ visible: false });
  // };

  // handleCreate = () => {
  //   const { form } = this.formRef.props;
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       //return;
  //         message.loading('You are stying in... ', 2.5).then(() => {
  //         message.success('Movie added');
  //         console.log('Received values of form: ', values);
  //       })
  //     }
  //     // console.log('Received values of form: ', values);
  //     form.resetFields();
  //     this.setState({
  //       visible: false,
  //      });
  //  });

  // };
  // saveFormRef = formRef => {
  //   this.formRef = formRef;
  // }
  /////////////////////////End for show/hide modal//////////////////////
  handleChange = (x) => {
    this.setState({ x });
  };
  render() {
    const { value } = this.state;
    const { Search } = Input;
    

    return (
      <div className="App" style={{ background: '#ECECEC', padding: '30px' }}>
        <header>
          <Search className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(newValue)=>{this.setState({
              titlefilter:newValue
            })}}
            style={{ width: 1100 }}
          />
          <Rate onChange={this.handleChange} value={value} />
       
     
          <br/><br/>
        </header>
        <main>
          <Card data={this.getAllMovies()} onaddnewMovie={(ch) => this.addnewMovie(ch)} handlechange={(ch)=>this.handleChange(ch)} />
          <Form add={(ch)=>this.addnewMovie(ch)}/>
          {/* <Formulaire
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          /> */}
        </main>

      </div>

    )
  }
}
