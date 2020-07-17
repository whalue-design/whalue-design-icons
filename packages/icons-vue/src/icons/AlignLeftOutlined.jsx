// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AlignLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AlignLeftOutlined';

export default {
  name: 'IconAlignLeftOutlined',
  displayName: 'AlignLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlignLeftOutlinedSvg } },
      children,
    ),
};