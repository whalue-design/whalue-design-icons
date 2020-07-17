// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ScheduleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ScheduleTwoTone';

export default {
  name: 'IconScheduleTwoTone',
  displayName: 'ScheduleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScheduleTwoToneSvg } },
      children,
    ),
};