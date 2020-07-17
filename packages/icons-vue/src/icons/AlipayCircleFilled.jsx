// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlipayCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/AlipayCircleFilled';

export default {
  name: 'IconAlipayCircleFilled',
  displayName: 'AlipayCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlipayCircleFilledSvg } },
      children,
    ),
};