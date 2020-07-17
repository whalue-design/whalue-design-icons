// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FundOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FundOutlined';

export default {
  name: 'IconFundOutlined',
  displayName: 'FundOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FundOutlinedSvg } },
      children,
    ),
};