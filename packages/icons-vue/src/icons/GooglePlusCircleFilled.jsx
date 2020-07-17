// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GooglePlusCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/GooglePlusCircleFilled';

export default {
  name: 'IconGooglePlusCircleFilled',
  displayName: 'GooglePlusCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GooglePlusCircleFilledSvg } },
      children,
    ),
};