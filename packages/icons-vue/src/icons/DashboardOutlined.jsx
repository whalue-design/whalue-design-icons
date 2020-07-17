// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DashboardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DashboardOutlined';

export default {
  name: 'IconDashboardOutlined',
  displayName: 'DashboardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DashboardOutlinedSvg } },
      children,
    ),
};