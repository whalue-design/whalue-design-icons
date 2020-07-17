// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BgColorsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BgColorsOutlined';

export default {
  name: 'IconBgColorsOutlined',
  displayName: 'BgColorsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BgColorsOutlinedSvg } },
      children,
    ),
};