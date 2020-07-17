// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SkinTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SkinTwoTone';

export default {
  name: 'IconSkinTwoTone',
  displayName: 'SkinTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkinTwoToneSvg } },
      children,
    ),
};