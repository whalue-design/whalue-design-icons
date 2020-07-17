// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MonitorOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MonitorOutlined';

export default {
  name: 'IconMonitorOutlined',
  displayName: 'MonitorOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MonitorOutlinedSvg } },
      children,
    ),
};