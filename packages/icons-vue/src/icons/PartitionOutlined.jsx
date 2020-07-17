// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PartitionOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PartitionOutlined';

export default {
  name: 'IconPartitionOutlined',
  displayName: 'PartitionOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PartitionOutlinedSvg } },
      children,
    ),
};