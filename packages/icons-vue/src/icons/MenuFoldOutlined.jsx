// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MenuFoldOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MenuFoldOutlined';

export default {
  name: 'IconMenuFoldOutlined',
  displayName: 'MenuFoldOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MenuFoldOutlinedSvg } },
      children,
    ),
};