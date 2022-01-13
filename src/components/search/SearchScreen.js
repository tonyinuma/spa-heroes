import React from 'react';

const SearchScreen = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <>
            <div className="row container">
                <div className="col-md-5">
                    <h4>Search a Hero</h4>
                    <form onSubmit={(e) => {
                        handleSearch(e)
                    }}>
                        <input type="text" placeholder="Write his name here ..."
                               className="form-control"
                               name="searchText"
                               autoComplete="off"/>
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
