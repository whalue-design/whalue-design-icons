// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShopTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ShopTwoTone';

export default {
  name: 'IconShopTwoTone',
  displayName: 'ShopTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShopTwoToneSvg } },
      children,
    ),
};