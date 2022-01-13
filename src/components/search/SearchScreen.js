import React from 'react';
import {useForm} from "../../hooks/useForm";

const SearchScreen = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });

    const {searchText} = formValues;

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
            </div>
        </>
    );
};

export default SearchScreen;
