// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import GroupOutlinedSvg from '@whalue-design/icons-svg/lib/asn/GroupOutlined';

export default {
  name: 'IconGroupOutlined',
  displayName: 'GroupOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GroupOutlinedSvg } },
      children,
    ),
};