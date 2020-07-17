// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SwapRightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SwapRightOutlined';

export default {
  name: 'IconSwapRightOutlined',
  displayName: 'SwapRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SwapRightOutlinedSvg } },
      children,
    ),
};