import React from "react"
import Movies from '../components/Movies'
import Search from '../components/Search'
export default class Main extends React.Component {
   state = {
      movies:[],
      searchKey:'matrix',
      type:'All',
      loading:false
   }

   fetch = (type = '') => {
      this.setState({loading:true})
      if(this.state.type !== 'All') type= `&type=${this.state.type}`
      fetch(`http://www.omdbapi.com/?apikey=863fb196&s=${this.state.searchKey}${type}`)
      .then(res=> res.json())
      .then(data=> this.setState({movies:data.Search,loading:false}))
   }

   componentDidMount() {
      this.fetch()
   }

   searchMovies = (key) => {
      this.setState({searchKey:key},() => this.fetch())
   }

   searchByType = (type) => {
      this.setState({type},() => this.fetch())
   }

   render() {
      const {movies,loading} = this.state
      return <main className="container content">
         <Search searchMovies={this.searchMovies} searchByType={this.searchByType}/>
         {loading 
            ? (<h3>Loading...</h3>) 
            : <Movies movies={movies} />
         }
      </main>
   }
}