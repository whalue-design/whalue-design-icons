// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlignCenterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AlignCenterOutlined';

export default {
  name: 'IconAlignCenterOutlined',
  displayName: 'AlignCenterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlignCenterOutlinedSvg } },
      children,
    ),
};