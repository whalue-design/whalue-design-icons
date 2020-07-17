// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GoogleCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/GoogleCircleFilled';

export default {
  name: 'IconGoogleCircleFilled',
  displayName: 'GoogleCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoogleCircleFilledSvg } },
      children,
    ),
};