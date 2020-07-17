// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FundFilledSvg from '@whalue-design/icons-svg/lib/asn/FundFilled';

export default {
  name: 'IconFundFilled',
  displayName: 'FundFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FundFilledSvg } },
      children,
    ),
};