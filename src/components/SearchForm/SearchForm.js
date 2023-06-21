import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.inputContainer}>
      <input className={css.input} type="text" name="query" />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
