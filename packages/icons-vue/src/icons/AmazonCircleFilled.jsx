// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AmazonCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/AmazonCircleFilled';

export default {
  name: 'IconAmazonCircleFilled',
  displayName: 'AmazonCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AmazonCircleFilledSvg } },
      children,
    ),
};