// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BoxPlotOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BoxPlotOutlined';

export default {
  name: 'IconBoxPlotOutlined',
  displayName: 'BoxPlotOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BoxPlotOutlinedSvg } },
      children,
    ),
};