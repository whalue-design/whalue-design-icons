// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StockOutlinedSvg from '@whalue-design/icons-svg/lib/asn/StockOutlined';

export default {
  name: 'IconStockOutlined',
  displayName: 'StockOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StockOutlinedSvg } },
      children,
    ),
};