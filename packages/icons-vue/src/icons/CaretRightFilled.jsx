// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretRightFilledSvg from '@whalue-design/icons-svg/lib/asn/CaretRightFilled';

export default {
  name: 'IconCaretRightFilled',
  displayName: 'CaretRightFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretRightFilledSvg } },
      children,
    ),
};