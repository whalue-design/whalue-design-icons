// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GooglePlusSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/GooglePlusSquareFilled';

export default {
  name: 'IconGooglePlusSquareFilled',
  displayName: 'GooglePlusSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GooglePlusSquareFilledSvg } },
      children,
    ),
};