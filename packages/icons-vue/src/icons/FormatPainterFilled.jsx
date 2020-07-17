// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FormatPainterFilledSvg from '@whalue-design/icons-svg/lib/asn/FormatPainterFilled';

export default {
  name: 'IconFormatPainterFilled',
  displayName: 'FormatPainterFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FormatPainterFilledSvg } },
      children,
    ),
};