import { ContactItemText, ContactListItem, ContactListStyle, DeleteBtn } from "./ContactList.styled"

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    return (
        <ContactListStyle>
            <ContactListItem>
                <ContactItemText>Name</ContactItemText>
                <ContactItemText>Phone</ContactItemText>
            </ContactListItem>
            {(contacts).map(({ id, name, number }) => (
                <ContactListItem key={id}>
                    <ContactItemText>{name}</ContactItemText>
                    <ContactItemText>{number}</ContactItemText>
                    <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
                </ContactListItem>
            ))}
        </ContactListStyle>
    )
}