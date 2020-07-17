// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AppleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AppleOutlined';

export default {
  name: 'IconAppleOutlined',
  displayName: 'AppleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppleOutlinedSvg } },
      children,
    ),
};