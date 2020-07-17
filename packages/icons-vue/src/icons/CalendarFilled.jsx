// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CalendarFilledSvg from '@whalue-design/icons-svg/lib/asn/CalendarFilled';

export default {
  name: 'IconCalendarFilled',
  displayName: 'CalendarFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalendarFilledSvg } },
      children,
    ),
};