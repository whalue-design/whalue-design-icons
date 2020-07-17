// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GooglePlusOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GooglePlusOutlined';

export default {
  name: 'IconGooglePlusOutlined',
  displayName: 'GooglePlusOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GooglePlusOutlinedSvg } },
      children,
    ),
};