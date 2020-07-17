// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderTopOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderTopOutlined';

export default {
  name: 'IconBorderTopOutlined',
  displayName: 'BorderTopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderTopOutlinedSvg } },
      children,
    ),
};