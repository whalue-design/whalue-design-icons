// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CompassOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CompassOutlined';

export default {
  name: 'IconCompassOutlined',
  displayName: 'CompassOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompassOutlinedSvg } },
      children,
    ),
};