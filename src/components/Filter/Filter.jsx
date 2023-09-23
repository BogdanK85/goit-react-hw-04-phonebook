// import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterStyle, FilterText, Input } from './filter.styled';

export const Filter = ({ inputFilterShift, filter }) => {
  return (
    <FilterStyle>
      <FilterText>Find contact by name</FilterText>
      <Input
        name="filter"
        value={filter}
        type="text"
        placeholder="Search contacs"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={inputFilterShift}
      />
    </FilterStyle>
  );
};
