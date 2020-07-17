// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FacebookFilledSvg from '@whalue-design/icons-svg/lib/asn/FacebookFilled';

export default {
  name: 'IconFacebookFilled',
  displayName: 'FacebookFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FacebookFilledSvg } },
      children,
    ),
};