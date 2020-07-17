// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import NodeExpandOutlinedSvg from '@whalue-design/icons-svg/lib/asn/NodeExpandOutlined';

export default {
  name: 'IconNodeExpandOutlined',
  displayName: 'NodeExpandOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NodeExpandOutlinedSvg } },
      children,
    ),
};