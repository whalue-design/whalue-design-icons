// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LeftSquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/LeftSquareTwoTone';

export default {
  name: 'IconLeftSquareTwoTone',
  displayName: 'LeftSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftSquareTwoToneSvg } },
      children,
    ),
};