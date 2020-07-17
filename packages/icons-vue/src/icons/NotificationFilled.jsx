// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import NotificationFilledSvg from '@whalue-design/icons-svg/lib/asn/NotificationFilled';

export default {
  name: 'IconNotificationFilled',
  displayName: 'NotificationFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NotificationFilledSvg } },
      children,
    ),
};