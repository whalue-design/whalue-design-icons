// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EyeInvisibleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/EyeInvisibleTwoTone';

export default {
  name: 'IconEyeInvisibleTwoTone',
  displayName: 'EyeInvisibleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeInvisibleTwoToneSvg } },
      children,
    ),
};