// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShoppingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ShoppingOutlined';

export default {
  name: 'IconShoppingOutlined',
  displayName: 'ShoppingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShoppingOutlinedSvg } },
      children,
    ),
};