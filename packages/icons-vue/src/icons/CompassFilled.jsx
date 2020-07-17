// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CompassFilledSvg from '@whalue-design/icons-svg/lib/asn/CompassFilled';

export default {
  name: 'IconCompassFilled',
  displayName: 'CompassFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompassFilledSvg } },
      children,
    ),
};