// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderLeftOutlined';

export default {
  name: 'IconBorderLeftOutlined',
  displayName: 'BorderLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderLeftOutlinedSvg } },
      children,
    ),
};