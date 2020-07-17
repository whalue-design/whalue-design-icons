// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BellOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BellOutlined';

export default {
  name: 'IconBellOutlined',
  displayName: 'BellOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BellOutlinedSvg } },
      children,
    ),
};