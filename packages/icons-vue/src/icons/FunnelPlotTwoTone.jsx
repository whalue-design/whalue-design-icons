// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FunnelPlotTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FunnelPlotTwoTone';

export default {
  name: 'IconFunnelPlotTwoTone',
  displayName: 'FunnelPlotTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FunnelPlotTwoToneSvg } },
      children,
    ),
};