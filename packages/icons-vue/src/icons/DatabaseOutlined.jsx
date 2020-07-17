// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DatabaseOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DatabaseOutlined';

export default {
  name: 'IconDatabaseOutlined',
  displayName: 'DatabaseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DatabaseOutlinedSvg } },
      children,
    ),
};