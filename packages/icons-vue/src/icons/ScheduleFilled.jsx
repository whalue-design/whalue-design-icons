// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ScheduleFilledSvg from '@whalue-design/icons-svg/lib/asn/ScheduleFilled';

export default {
  name: 'IconScheduleFilled',
  displayName: 'ScheduleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScheduleFilledSvg } },
      children,
    ),
};