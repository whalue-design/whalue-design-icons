// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FunnelPlotOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FunnelPlotOutlined';

export default {
  name: 'IconFunnelPlotOutlined',
  displayName: 'FunnelPlotOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FunnelPlotOutlinedSvg } },
      children,
    ),
};