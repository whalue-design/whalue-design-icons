// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RightCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/RightCircleTwoTone';

export default {
  name: 'IconRightCircleTwoTone',
  displayName: 'RightCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightCircleTwoToneSvg } },
      children,
    ),
};