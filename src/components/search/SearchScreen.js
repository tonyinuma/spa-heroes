import React from 'react';
import {useForm} from "../../hooks/useForm";
import {getHeroByName} from "../../selectors/getHeroesByName";
import {HeroCard} from "../hero/HeroCard";

const SearchScreen = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });

    const {searchText} = formValues;
    const heroesFiltered = getHeroByName(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(formValues);
    }

    return (
        <>
            <div className="row container">
                <div className="col-md-5">
                    <h4>Search a Hero</h4>
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Write his name here ..."
                               className="form-control"
                               name="searchText"
                               autoComplete="off"
                               value={searchText}
                               onChange={handleInputChange}/>
                        <button type="submit" className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-md-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} hero={hero}/>
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default SearchScreen;
