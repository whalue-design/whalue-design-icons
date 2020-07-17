// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SmallDashOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SmallDashOutlined';

export default {
  name: 'IconSmallDashOutlined',
  displayName: 'SmallDashOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SmallDashOutlinedSvg } },
      children,
    ),
};