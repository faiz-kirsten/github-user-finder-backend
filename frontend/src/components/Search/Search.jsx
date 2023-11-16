import style from "./Search.module.css"; // import css

// search input form that triggers the handleForm function on submit
const Search = ({ handleForm, setUsername }) => {
    return (
        <form onSubmit={handleForm} className={style.form}>
            <div className={style.formController}>
                <input
                    placeholder="Enter username..."
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    className={style.searchInput}
                    required
                />

                <input type="submit" className="btn" />
            </div>
        </form>
    );
};

export default Search;
