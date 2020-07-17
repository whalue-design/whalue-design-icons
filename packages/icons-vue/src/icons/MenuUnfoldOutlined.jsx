// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MenuUnfoldOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MenuUnfoldOutlined';

export default {
  name: 'IconMenuUnfoldOutlined',
  displayName: 'MenuUnfoldOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MenuUnfoldOutlinedSvg } },
      children,
    ),
};