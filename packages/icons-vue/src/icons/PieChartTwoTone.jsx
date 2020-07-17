// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PieChartTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PieChartTwoTone';

export default {
  name: 'IconPieChartTwoTone',
  displayName: 'PieChartTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PieChartTwoToneSvg } },
      children,
    ),
};