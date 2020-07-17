// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SkinFilledSvg from '@whalue-design/icons-svg/lib/asn/SkinFilled';

export default {
  name: 'IconSkinFilled',
  displayName: 'SkinFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkinFilledSvg } },
      children,
    ),
};