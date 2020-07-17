// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlertTwoToneSvg from '@whalue-design/icons-svg/lib/asn/AlertTwoTone';

export default {
  name: 'IconAlertTwoTone',
  displayName: 'AlertTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlertTwoToneSvg } },
      children,
    ),
};