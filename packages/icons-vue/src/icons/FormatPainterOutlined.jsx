// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FormatPainterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FormatPainterOutlined';

export default {
  name: 'IconFormatPainterOutlined',
  displayName: 'FormatPainterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FormatPainterOutlinedSvg } },
      children,
    ),
};