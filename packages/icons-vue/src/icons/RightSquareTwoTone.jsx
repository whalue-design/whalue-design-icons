// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RightSquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/RightSquareTwoTone';

export default {
  name: 'IconRightSquareTwoTone',
  displayName: 'RightSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightSquareTwoToneSvg } },
      children,
    ),
};