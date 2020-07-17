// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WindowsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WindowsOutlined';

export default {
  name: 'IconWindowsOutlined',
  displayName: 'WindowsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WindowsOutlinedSvg } },
      children,
    ),
};