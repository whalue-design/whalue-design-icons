// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderBottomOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderBottomOutlined';

export default {
  name: 'IconBorderBottomOutlined',
  displayName: 'BorderBottomOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderBottomOutlinedSvg } },
      children,
    ),
};