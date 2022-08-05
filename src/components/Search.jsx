import {Component} from 'react'

export default class Search extends Component {
   state = {
      search:'',
      type:'All'
   }

   handleKey = (e) => {
      if(e.key === 'Enter')
         this.props.searchMovies(e.target.value)
   }

   handleType =(e) => {
      this.setState({type:e.target.value},() => {
         this.props.searchByType(this.state.type)
      })
   }

   render() {
      return <div>
         <div className='search-container'>
            <input 
            className='search-input'
            type="search" 
            value={this.state.search}
            onChange={e => this.setState({search:e.target.value})}
            onKeyDown={this.handleKey}
            placeholder='search'/>
            <button onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
         </div>
         <div className='radio-buttons-container'>
            <label>
               <input type="radio" name="type" value='All' 
                  onChange={this.handleType}
                  checked={this.state.type === 'All'}/>
                  All
            </label>
            <label>
               <input type="radio" name="type" value='movie' 
                  onChange={this.handleType}
                  checked={this.state.type === 'movie'}/>
                  movie
            </label>
            <label>
               <input type="radio" name="type" value='series' 
                  onChange={this.handleType}
                  checked={this.state.type === 'series'}/>
                  series
            </label>
         </div>
      </div>
   }
}