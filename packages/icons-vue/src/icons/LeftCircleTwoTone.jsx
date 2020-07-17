// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LeftCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/LeftCircleTwoTone';

export default {
  name: 'IconLeftCircleTwoTone',
  displayName: 'LeftCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftCircleTwoToneSvg } },
      children,
    ),
};