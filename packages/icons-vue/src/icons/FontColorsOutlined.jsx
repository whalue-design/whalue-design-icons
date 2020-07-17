// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FontColorsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FontColorsOutlined';

export default {
  name: 'IconFontColorsOutlined',
  displayName: 'FontColorsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FontColorsOutlinedSvg } },
      children,
    ),
};