// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CalendarTwoToneSvg from '@whalue-design/icons-svg/lib/asn/CalendarTwoTone';

export default {
  name: 'IconCalendarTwoTone',
  displayName: 'CalendarTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalendarTwoToneSvg } },
      children,
    ),
};