// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HeatMapOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HeatMapOutlined';

export default {
  name: 'IconHeatMapOutlined',
  displayName: 'HeatMapOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HeatMapOutlinedSvg } },
      children,
    ),
};