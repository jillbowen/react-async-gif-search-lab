import React, {Component} from 'react' 

class GifSearch extends Component {

    state = {
        searchQuery: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.searchQuery)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchQuery} onChange={e => this.setState({searchQuery: e.target.value})} />
                </form>
            </div>
        )
    }
}

export default GifSearch;