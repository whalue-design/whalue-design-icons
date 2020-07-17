// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CalculatorTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CalculatorTwoTone';

export default {
  name: 'IconCalculatorTwoTone',
  displayName: 'CalculatorTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalculatorTwoToneSvg } },
      children,
    ),
};