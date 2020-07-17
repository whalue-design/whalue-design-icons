// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderHorizontalOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderHorizontalOutlined';

export default {
  name: 'IconBorderHorizontalOutlined',
  displayName: 'BorderHorizontalOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderHorizontalOutlinedSvg } },
      children,
    ),
};