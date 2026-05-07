import { Modal } from 'react-native';
import { Body, Overlay } from './styles';

export default function CustomModal({ children, visible }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
    >
      <Overlay>
        <Body>
          {children}
        </Body>
      </Overlay>
    </Modal>
  );
}