import React, {useMemo} from 'react';
import {useForm} from "../../hooks/useForm";
import {getHeroesByName} from "../../selectors/getHeroesByName";
import {HeroCard} from "../hero/HeroCard";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
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
                        (q === '') ?
                            <div className="alert alert-info">Search Heroes</div> : (heroesFiltered.length === 0) &&
                            <div className="alert alert-danger">No Results for '{q}'</div>
                    }

                    <div className="row">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard key={hero.id} hero={hero}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default SearchScreen;
