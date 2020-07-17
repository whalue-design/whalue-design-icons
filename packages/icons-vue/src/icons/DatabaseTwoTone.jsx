// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DatabaseTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DatabaseTwoTone';

export default {
  name: 'IconDatabaseTwoTone',
  displayName: 'DatabaseTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DatabaseTwoToneSvg } },
      children,
    ),
};