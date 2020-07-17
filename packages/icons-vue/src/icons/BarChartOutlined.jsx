// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BarChartOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BarChartOutlined';

export default {
  name: 'IconBarChartOutlined',
  displayName: 'BarChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BarChartOutlinedSvg } },
      children,
    ),
};