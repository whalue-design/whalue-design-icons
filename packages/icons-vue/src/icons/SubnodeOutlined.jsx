// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SubnodeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SubnodeOutlined';

export default {
  name: 'IconSubnodeOutlined',
  displayName: 'SubnodeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SubnodeOutlinedSvg } },
      children,
    ),
};