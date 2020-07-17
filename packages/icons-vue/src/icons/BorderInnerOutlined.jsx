// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderInnerOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderInnerOutlined';

export default {
  name: 'IconBorderInnerOutlined',
  displayName: 'BorderInnerOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderInnerOutlinedSvg } },
      children,
    ),
};