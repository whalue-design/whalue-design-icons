// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShoppingFilledSvg from '@whalue-design/icons-svg/lib/asn/ShoppingFilled';

export default {
  name: 'IconShoppingFilled',
  displayName: 'ShoppingFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShoppingFilledSvg } },
      children,
    ),
};