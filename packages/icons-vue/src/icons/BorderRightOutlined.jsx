// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderRightOutlined';

export default {
  name: 'IconBorderRightOutlined',
  displayName: 'BorderRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderRightOutlinedSvg } },
      children,
    ),
};