// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlipayCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AlipayCircleOutlined';

export default {
  name: 'IconAlipayCircleOutlined',
  displayName: 'AlipayCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlipayCircleOutlinedSvg } },
      children,
    ),
};