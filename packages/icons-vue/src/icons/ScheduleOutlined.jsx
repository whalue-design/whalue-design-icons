// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ScheduleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ScheduleOutlined';

export default {
  name: 'IconScheduleOutlined',
  displayName: 'ScheduleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScheduleOutlinedSvg } },
      children,
    ),
};