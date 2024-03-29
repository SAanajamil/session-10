import React from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './image/image.png'

class App extends React.Component {
    state = {
        data : {},
        country:'',
    }

    async componentDidMount(){
        const fetcheData = await fetchData();
        this.setState({ data:fetcheData });
    } 
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data:fetchedData, country: country });

    }
    render(){
        const { data, country } = this.state;
         return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = {data} country={country} />
            </div>
        )
    }
}
export default App;