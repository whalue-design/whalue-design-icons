// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PieChartOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PieChartOutlined';

export default {
  name: 'IconPieChartOutlined',
  displayName: 'PieChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PieChartOutlinedSvg } },
      children,
    ),
};