// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TrademarkCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TrademarkCircleOutlined';

export default {
  name: 'IconTrademarkCircleOutlined',
  displayName: 'TrademarkCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrademarkCircleOutlinedSvg } },
      children,
    ),
};