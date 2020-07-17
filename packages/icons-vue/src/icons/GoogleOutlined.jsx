// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GoogleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GoogleOutlined';

export default {
  name: 'IconGoogleOutlined',
  displayName: 'GoogleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoogleOutlinedSvg } },
      children,
    ),
};