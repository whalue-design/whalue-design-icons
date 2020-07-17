// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MenuOutlinedSvg from '@whalue-design/icons-svg/lib/asn/MenuOutlined';

export default {
  name: 'IconMenuOutlined',
  displayName: 'MenuOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MenuOutlinedSvg } },
      children,
    ),
};