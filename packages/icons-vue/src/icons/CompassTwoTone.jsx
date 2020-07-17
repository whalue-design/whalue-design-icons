// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CompassTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CompassTwoTone';

export default {
  name: 'IconCompassTwoTone',
  displayName: 'CompassTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompassTwoToneSvg } },
      children,
    ),
};