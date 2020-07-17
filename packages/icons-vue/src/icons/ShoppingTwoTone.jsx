// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShoppingTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ShoppingTwoTone';

export default {
  name: 'IconShoppingTwoTone',
  displayName: 'ShoppingTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShoppingTwoToneSvg } },
      children,
    ),
};