import React from 'react';
import  { addMovie, removeMovie, getData } from './../actions/index';
import { connect } from 'react-redux';
import SingleMovie from './SingleMovie';

class MovieList extends React.Component {
   
    componentDidMount() {
        this.props.getData()
    }

    render() {
        const list = this.props.MovieList[this.props.listType];
        const name = this.props.btnName;
        const listName = this.props.list;
        const clickName = name === 'Remove' ? this.props.removeMovie : this.props.addMovie;
        return (
            <div >
                <h2 className="title">{listName}</h2>
                <ul className="card-content" >
                {
                    list.map((item) => {
                    return  <li key={item.id}>
                                <SingleMovie item = {item}  button={name}  onClick={clickName}/>
                            </li>
                    })
                } 
                </ul>
                <div>commit 3</div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        MovieList: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    getData: () => { dispatch(getData())},
    addMovie: (movie) => { dispatch(addMovie(movie)) },
    removeMovie: (movie) => { dispatch(removeMovie(movie)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)