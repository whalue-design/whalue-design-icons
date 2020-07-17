// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AmazonSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/AmazonSquareFilled';

export default {
  name: 'IconAmazonSquareFilled',
  displayName: 'AmazonSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AmazonSquareFilledSvg } },
      children,
    ),
};