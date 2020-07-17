// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TrademarkOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TrademarkOutlined';

export default {
  name: 'IconTrademarkOutlined',
  displayName: 'TrademarkOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrademarkOutlinedSvg } },
      children,
    ),
};