// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import NotificationTwoToneSvg from '@whalue-design/icons-svg/lib/asn/NotificationTwoTone';

export default {
  name: 'IconNotificationTwoTone',
  displayName: 'NotificationTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NotificationTwoToneSvg } },
      children,
    ),
};