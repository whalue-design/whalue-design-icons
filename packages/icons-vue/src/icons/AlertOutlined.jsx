// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlertOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AlertOutlined';

export default {
  name: 'IconAlertOutlined',
  displayName: 'AlertOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlertOutlinedSvg } },
      children,
    ),
};