// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ClusterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ClusterOutlined';

export default {
  name: 'IconClusterOutlined',
  displayName: 'ClusterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ClusterOutlinedSvg } },
      children,
    ),
};