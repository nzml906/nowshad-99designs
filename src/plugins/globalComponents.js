import BaseButton from '../components/BaseButton';
import Card from '../components/Card';
import Modal from '../components/Modal';
import BaseInput from '../components/BaseInput';
import Icon from '../components/Icon';

export default {
  install(Vue) {
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(Card.name, Card);
    Vue.component(Modal.name, Modal);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Icon.name, Icon);
  }
};
