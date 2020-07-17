// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import NodeCollapseOutlinedSvg from '@whalue-design/icons-svg/lib/asn/NodeCollapseOutlined';

export default {
  name: 'IconNodeCollapseOutlined',
  displayName: 'NodeCollapseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NodeCollapseOutlinedSvg } },
      children,
    ),
};