// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UsergroupAddOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UsergroupAddOutlined';

export default {
  name: 'IconUsergroupAddOutlined',
  displayName: 'UsergroupAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UsergroupAddOutlinedSvg } },
      children,
    ),
};