// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FundProjectionScreenOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FundProjectionScreenOutlined';

export default {
  name: 'IconFundProjectionScreenOutlined',
  displayName: 'FundProjectionScreenOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FundProjectionScreenOutlinedSvg } },
      children,
    ),
};