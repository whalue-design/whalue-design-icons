// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TwitterSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/TwitterSquareFilled';

export default {
  name: 'IconTwitterSquareFilled',
  displayName: 'TwitterSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TwitterSquareFilledSvg } },
      children,
    ),
};