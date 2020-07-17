// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PercentageOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PercentageOutlined';

export default {
  name: 'IconPercentageOutlined',
  displayName: 'PercentageOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PercentageOutlinedSvg } },
      children,
    ),
};