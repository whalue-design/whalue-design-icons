// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DashboardTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DashboardTwoTone';

export default {
  name: 'IconDashboardTwoTone',
  displayName: 'DashboardTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DashboardTwoToneSvg } },
      children,
    ),
};