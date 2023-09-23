import { validateForm } from 'helpers/validationForm';
import { Component } from 'react';
import {
  ButtonAddContact,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormInput = evt => {
    if (evt.target.name === 'number') {
      if (!/^\d+$/.test(evt.target.value)) {
        return;
      }
    }
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const errors = validateForm(name, number);

    if (Object.values(errors).every(errors => errors === '')) {
      this.props.addContact(this.state);
      this.clearForm();
    } else {
      this.setState({ errors });
    }
  };

  clearForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // const { name, number } = this.state;
    return (
      <FormStyled onSubmit={this.handleFormSubmit}>
        <Label>
          Name
          <Input
            onChange={this.handleFormInput}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="name"
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={this.handleFormInput}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="number"
          />
        </Label>
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </FormStyled>
    );
  }
}
