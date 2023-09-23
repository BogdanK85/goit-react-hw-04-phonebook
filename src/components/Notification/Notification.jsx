import { NotifyParagraph, NotifyText } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotifyText>
      <NotifyParagraph>{message}</NotifyParagraph>
    </NotifyText>
  );
};
