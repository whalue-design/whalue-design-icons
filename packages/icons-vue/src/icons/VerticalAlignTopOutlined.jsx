// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VerticalAlignTopOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VerticalAlignTopOutlined';

export default {
  name: 'IconVerticalAlignTopOutlined',
  displayName: 'VerticalAlignTopOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerticalAlignTopOutlinedSvg } },
      children,
    ),
};