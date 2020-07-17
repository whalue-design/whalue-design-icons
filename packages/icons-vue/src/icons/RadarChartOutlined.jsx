// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RadarChartOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RadarChartOutlined';

export default {
  name: 'IconRadarChartOutlined',
  displayName: 'RadarChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadarChartOutlinedSvg } },
      children,
    ),
};