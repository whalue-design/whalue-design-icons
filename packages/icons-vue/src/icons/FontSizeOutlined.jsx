// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FontSizeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FontSizeOutlined';

export default {
  name: 'IconFontSizeOutlined',
  displayName: 'FontSizeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FontSizeOutlinedSvg } },
      children,
    ),
};