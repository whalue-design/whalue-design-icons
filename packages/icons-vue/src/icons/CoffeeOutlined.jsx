// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CoffeeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CoffeeOutlined';

export default {
  name: 'IconCoffeeOutlined',
  displayName: 'CoffeeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CoffeeOutlinedSvg } },
      children,
    ),
};