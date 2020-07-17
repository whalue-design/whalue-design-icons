// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MacCommandOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MacCommandOutlined';

export default {
  name: 'IconMacCommandOutlined',
  displayName: 'MacCommandOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MacCommandOutlinedSvg } },
      children,
    ),
};