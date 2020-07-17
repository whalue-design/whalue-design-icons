// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderlessTableOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderlessTableOutlined';

export default {
  name: 'IconBorderlessTableOutlined',
  displayName: 'BorderlessTableOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderlessTableOutlinedSvg } },
      children,
    ),
};