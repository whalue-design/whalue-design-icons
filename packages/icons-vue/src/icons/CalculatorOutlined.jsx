// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CalculatorOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CalculatorOutlined';

export default {
  name: 'IconCalculatorOutlined',
  displayName: 'CalculatorOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalculatorOutlinedSvg } },
      children,
    ),
};