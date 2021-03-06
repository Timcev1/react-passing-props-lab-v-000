import React from 'react';
import FruitBasket from './FruitBasket';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null,
        };
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruits();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
          .then(response => response.json())
          .then(filters => this.setState({ filters }));
    }

    fetchFruits() {
        fetch('/api/fruit')
            .then(response => response.json())
            .then(fruit => this.setState({ fruit }));
    }

    render() {
      return (
        <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
       />
     );
   }
}

export default App;
