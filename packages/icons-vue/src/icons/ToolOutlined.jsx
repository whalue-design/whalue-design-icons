// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ToolOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ToolOutlined';

export default {
  name: 'IconToolOutlined',
  displayName: 'ToolOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ToolOutlinedSvg } },
      children,
    ),
};